export abstract class BaseUnit{
    protected static role: string;
    protected name: string;
    protected queue: (() => void)[];
    protected defaultAction: () => void;
    protected addQueue: () => void;
    public run: () => void;
}