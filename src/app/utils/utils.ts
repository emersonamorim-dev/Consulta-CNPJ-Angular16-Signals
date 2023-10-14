import { DestroyRef, effect, inject, Signal, signal } from "@angular/core";
import { Observable, shareReplay } from "rxjs";

export function fromObservable<T>(
  obs$: Observable<T>,
  initialValue: T
): () => T {
  const sig = signal(initialValue);
  const destroy = inject(DestroyRef);

  const sub = obs$.subscribe((val) => sig.update(() => val));
  destroy.onDestroy(() => {
    sub.unsubscribe();
  });

  return sig.bind(sig);
}

export function fromSignal<T>(source: Signal<T>): Observable<T> {
  const observable = new Observable<T>(observer => {
    const watcher = effect(() => {
      try {
        observer.next(source());
      } catch (err) {
        observer.error(err);
      }
    });
    return () => {
      watcher.destroy();
    };
  });

  return observable.pipe(shareReplay({refCount: true, bufferSize: 1}));
}