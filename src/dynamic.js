import { shuffle } from 'lodash-es'

import './dynamic.css'

const arr = [1, 2, 3, 4]

export default function printSomething () {
	console.dir(shuffle(arr))
}