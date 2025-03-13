export class Node{
    constructor(value){
        this.value = value;
        this.nextNode = null;
    }
}

export class LinkedList{
    constructor(){
        this.head = null;
    }
    append(value){
        const newNode = new Node(value);
        if(this.head == null){
            this.head = newNode;
            return;
        }
        
        let currentNode = this.head;
        while(currentNode.nextNode != null){
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = newNode;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.nextNode = this.head;
        this.head = newNode;
    }

    size(){
        let count = 0;
        let currentNode =  this.head;
        while(currentNode != null){
            count++;
            currentNode = currentNode.nextNode;
        }
        return count;
    }

    head(){
        return this.head;
    }
    
    tail(){
        let currentNode = this.head;
        while(currentNode.nextNode != null){
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    at(index){
        let currentNode = this.head;
        let count = 0;
        while(count != index){
            currentNode = currentNode.nextNode;
            count++;
            if(currentNode === null){
                return null;
            }
        }
        return currentNode;
    }

    pop(){
        if(this.head === null){
            return;
        }
        let currentNode = this.head;
        if(currentNode.nextNode === null){
            this.head = null;
            return;
        }
        else{
            let secondLastNode = null;
            while(currentNode.nextNode != null){
            secondLastNode = currentNode;
            currentNode = currentNode.nextNode;
            }
            secondLastNode.nextNode = null;
            return currentNode.value;
        }
    }

    contains(value){
        let currentNode = this.head;
        while(currentNode !== null){
            if(currentNode.value === value){
                return true;
            }
            else{
                currentNode = currentNode.nextNode;
            }
            
        }
        return false;
    }

    find(value){
        let currentNode = this.head;
        let index = 0;
        while(currentNode !== null){
            if(currentNode.value === value){
                return index;
            }
            else{
                currentNode = currentNode.nextNode;
                index++;
            }
        }
        return null;
    }

    toString(){
        let word = "";
        let currentNode = this.head;
        while(currentNode != null){
            word += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.nextNode;
        }
        word += "null";
        return word
    }

    insertAt(value, index){
        let currentNode = this.head
        if(index === 0){
            const newNode  = new Node(value);
            newNode.nextNode = this.head;
            this.head = newNode;
            return;
        }
        let counter = 0
        while(counter < index - 1 && currentNode != null){
            currentNode =  currentNode.nextNode;
            counter++;
        }
        
        if(currentNode === null){
            return;
        }

        const newNode = new Node(value);
        newNode.nextNode = currentNode.nextNode;
        currentNode.nextNode= newNode;
    }

    removeAt(index){
        if(index === 0){
            if(this.head){
                this.head = this.head.nextNode;
               
            }
            return;
        }
        let counter = 0;
        let currentNode = this.head;
        while(counter < index - 1 && currentNode != null){
            currentNode = currentNode.nextNode;
            counter++;
        }
        if(currentNode === null || currentNode.nextNode === null){
            return;
        }
        currentNode.nextNode = currentNode.nextNode.nextNode;
    }
}




