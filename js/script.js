const {createApp} = Vue;

createApp({
	data() {
		return{
            todoList : [
				{
					text : 'Pane',
					done : false
				},
				{
					text : 'Sale',
					done : false
				},
				{
					text : 'Pepe',
					done : true
				},
				{
					text : 'Olio',
					done : true
				},
				{
					text : 'Latte',
					done : false
				},
				{
					text : 'Pasta',
					done : false
				},
			]
		}
	},

    methods: {
		removeToDo(itemRemove){
			const removeCheck = this.todoList.indexOf(itemRemove);
			if (removeCheck > - 1 ){
				this.todoList.splice(removeCheck, 1)
			}
		},
		sendListItem(){
			const obj = {};
			obj['text'] = this.userToDo.charAt(0).toUpperCase() + this.userToDo.substring(1).toLowerCase()
			obj['done'] = false
			this.todoList.push(obj)
		},
		swichDone(item){
			if(!this.todoList[item].done){
				this.todoList[item].done = true
			} else {
				this.todoList[item].done = false
			}
		}
    },
}).mount ('#app')