import { House } from "./House.js"
import { DefaultOrder, RandomOrder } from "./Order.js"
import { DefaultFormater, EchoFormater } from "./Format.js"

const h = new House(new DefaultOrder(), new DefaultFormater())
console.log(h.line(3))

const e = new House(new DefaultOrder(), new EchoFormater())
console.log(e.line(3))

const r = new House(new RandomOrder(), new DefaultFormater())
console.log(r.line(3))

const re = new House(new RandomOrder(), new EchoFormater())
console.log(re.line(3))