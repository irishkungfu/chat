import { observable, action } from "mobx"

export default class ThemeModel {
    @observable chatInputHeight = 50 // base value, calculated value will override
    @observable chatHeaderHeight = 50 // base value, calculated value will override
    primary = "blue"
    lightText = "white"
    // colors
    // general spacing
    @action
    updateHeight(newHeight, element) {
        switch (element) {
            case "header":
                this.chatHeaderHeight = newHeight
                break
            case "input":
                this.chatInputHeight = newHeight
                break
            default:
                console.warn("No Argument added for element in updateHeight")
        }

    }
}