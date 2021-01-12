class Form{
    constructor(){
        this.input=createInput("Name")
        this.button=createButton("Join")
        this.greeting=createElement('h3')
        this.title=createElement('h2')
    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
        this.title.hide()
    }

    display(){
        this.title.html("CarRacing")
        this.title.position(displayWidth/2-50,0)

        this.input.position(displayWidth/2-50,displayHeight/2-80)
        this.button.position(displayWidth/2+30,displayHeight/2)

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()

            player.name= this.input.value() 
            playerCount+=1
            player.index = playerCount
            player.updateCount(playerCount)
            player.update()
            this.greeting.html("Welcome "+ player.name)
            this.greeting.position(displayWidth/2-70,displayHeight/4)
        })
    }
}