//% weight=0 color=#3CB371 icon="\uf0ad" block="Tools"
namespace test1 {
    /**
    * 計算長方形面積，並回傳
    */
    //% blockId="areaOfRectangle" block="area of rectangle length %length|width %width"
    //% blockGap=2 weight=0 blockExternalInputs=true
    export function areaOfRectangle(length: number, width:number): number {
        return length*width
    }
    /**
    * 計算長方形面積，不回傳，只顯示在LED
    */
    //% blockId="ledOfRectangle" block="show area of rectangle length %length|width %width"
    //% blockGap=2 weight=1
    export function ledOfRectangle(length: number, width:number): void {
        basic.showNumber(length*width)
    }
	
	//% block
	//% shim=test1::say_123
    export function say_123(): number {
		//basic.showNumber(1)
		//return 0
		return 0
    }
	
	//% block
	//% shim=test1::bar
    export function bar(): number {
		//test1.bar()
		//basic.showNumber(test1.say_123())
		//basic.showNumber(2)
		return 0
		//return say_123()
    }
	
}
