export default class Task {
    private user: string;
    private date: string;
    private hour: string;
    private place: string;

    public constructor(user: string, date: string, hour: string, place: string) {
        this.user = user;
        this.date = date;
        this.hour = hour;
        this.place = place;
    }

    public getUser(): string {
        return this.user;
    }
    public getDate(): string {
        return this.date;
    }
    public getHour(): string {
        return this.hour;
    }
    public getPlace(): string {
        return this.place;
    }
}