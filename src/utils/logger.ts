import chalk from 'chalk';

export enum LogLevel {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

export class Logger {
  private static instance: Logger;
  private isVerbose: boolean = false;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public setVerbose(verbose: boolean): void {
    this.isVerbose = verbose;
  }

  private formatMessage(level: LogLevel, message: string): string {
    const timestamp = new Date().toISOString();
    const levelColor = this.getLevelColor(level);
    return `${chalk.gray(timestamp)} ${levelColor(level)}${chalk.reset} ${message}`;
  }

  private getLevelColor(level: LogLevel): (text: string) => string {
    switch (level) {
      case LogLevel.INFO:
        return chalk.blue;
      case LogLevel.WARN:
        return chalk.yellow;
      case LogLevel.ERROR:
        return chalk.red;
      case LogLevel.SUCCESS:
        return chalk.green;
      default:
        return chalk.white;
    }
  }

  public log(level: LogLevel, message: string): void {
    if (level === LogLevel.INFO && !this.isVerbose) {
      return;
    }
    console.log(this.formatMessage(level, message));
  }

  public info(message: string): void {
    this.log(LogLevel.INFO, message);
  }

  public warn(message: string): void {
    this.log(LogLevel.WARN, message);
  }

  public error(message: string): void {
    this.log(LogLevel.ERROR, message);
  }

  public success(message: string): void {
    this.log(LogLevel.SUCCESS, message);
  }
} 