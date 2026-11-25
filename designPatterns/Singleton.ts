class Singleton {

    // le mot clé static partage l'attribut ou la méthode
    // pour chaque instance de la classe
    private static _instance: Singleton

    private constructor() {}

    static getInstance(): Singleton {
        if(!this._instance) {
            this._instance = new Singleton()
        }
        return this._instance
    }
}

class Logger {
    private static _instance: Logger
    private logs: string[]= []

    private constructor() {}

    static getInstance(): Logger {
        return (this._instance ??= new Logger())
    }

    log(message: string) {
        const line = `[${new Date().toISOString()}]${message}`
        this.logs.push(line)
        this.logs.forEach(l => console.log(l))
    }
}

Logger.getInstance().log("Coucou")
Logger.getInstance().log("Ca va ?")

interface Connexion {
    execute: (sql: string) => {}
}

class Database {
    private static _instance: Database
    private cnx: Connexion

    private constructor() {
        this.cnx = createConnexion()
    }

    static getInstance(): Database {
        return (this._instance ??= new Database())
    }

    query(sql: string) {
        return this.cnx.execute(sql);
    }
}

/*
Comment reconnaître un bon candidat
Pose-toi ces deux questions :
- Est-ce que deux instances seraient un bug ? (deux connexions concurrentes,
deux files d'impression, deux sources de vérité)

- Est-ce que tout le monde a besoin d'y accéder ? (logger, config, cache)
*/