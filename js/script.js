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
					text : 'Zucchero',
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
			if (removeCheck > -1 ){
				this.todoList.splice(removeCheck, 1)
			}
		}
    },
}).mount ('#app')