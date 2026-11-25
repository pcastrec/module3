export interface IFormater {
    format(data: string[]): string[]
}

export class DefaultFormater implements IFormater {
    format(data: string[]): string[] {
        return data
    }
}

export class EchoFormater implements IFormater {
    format(data: string[]): string[] {
        return data.map(p => `${p} ${p}`)
    }
}