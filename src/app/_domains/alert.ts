export interface Alert {
  type: ALERT_TYPE
  message: string
}

export enum ALERT_TYPE {
  INFO,
  ERROR
}
