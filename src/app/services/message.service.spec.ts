import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    service = new MessageService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a message when add is called', () => { 
    service.add('test message');
    const value = service.messages.toArray(); 
    expect(value).toEqual(['test message']);
  });

  it('should clear messages when clear is called', () => { 
    service.add('test message');
    service.clear();
    const value = service.messages.toArray(); 
    expect(value).toEqual([]);
  });

});


