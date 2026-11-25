export interface IOrderer {
    order(data: string[]): string[]
}

export class DefaultOrder implements IOrderer {
    order(data: string[]): string[] {
        return data
    }
}

export class RandomOrder implements IOrderer {
    order(data: string[]): string[] {
        return data.sort(() => Math.random() - 0.5)
    }
}