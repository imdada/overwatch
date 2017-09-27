export interface SystemSelectedEvent {
    system: string;
    eventType: "stats" | "stats_1h" | "stats_1d";
}
