interface UserData {
    fn: string[];
    em: string[];
    ph: string[];
  }
  
  interface CustomData {
    currency: string;
    value: string;
  }
  
  export interface SendingData {
    event_name: string;
    event_id: string;
    event_time: number;
    action_source: string;
    user_data: UserData;
    custom_data: CustomData;
  }