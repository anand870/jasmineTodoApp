describe('Todo Model',function(){
	beforeEach(function() {
		this.todo=new Todo({
			title:'Rake Leaves'
		});
		var collection={
			url:"/collection",
		};
		this.todo.collection=collection;
		
	});
	describe('when instantiated',function(){
		it('should exibit attributes',function(){
			expect(this.todo.get('title')).toEqual('Rake Leaves');
		});
		it('should set priority to default',function(){
			expect(this.todo.get('priority')).toEqual(3);
		});
	});
	describe('urls',function(){
		describe('when no id is set',function(){
			it('should return the collection URL',function(){
				expect(this.todo.url()).toEqual('/collection');
			});
		});
		describe('when id is set',function(){
			it('should return the collection URL and id',function(){
				this.todo.set('id',1);
				expect(this.todo.url()).toEqual('/collection/1');
			});
		});
		
	});
});
