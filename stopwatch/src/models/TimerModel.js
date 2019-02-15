import { observable } from "mobx"
export default class TimerModel {
    observable(timer = 0)

    @action
    startTimer() {
        console.log("timer start")
    }
    stopTimer() {
        console.log("stop timer")
    }
    resetTimer() {
        console.log("resetTimer")
    }
    clearPreviousTrackedItems() {
        console.log("clearTimers")
    }
}