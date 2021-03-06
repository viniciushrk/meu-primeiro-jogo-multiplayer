export default function createKeyboardListener(document){
        const state =  {
            observers:[]
        }
        function subscribe(observerFunction){
            state.observers.push(observerFunction)
        }

        function notifyAll(command){
            //console.log(`KeyboardListener -> Notifying ${state.observers.length} observers`)

            for(const observerFunction of state.observers){
                observerFunction(command)
            }

        }

        document.addEventListener('keydown',handleKeydown)

        function handleKeydown(event){
            const keyPressed = event.key;

            const command = {
                playerId:'player1',
                keyPressed
            }

            //game.movePlayer(command)
            notifyAll(command)
        }

        return {subscribe}
    }