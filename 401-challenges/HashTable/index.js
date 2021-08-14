class Node {
  constructor(value) {
    this.next = null;
    this.value = value
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
    }
    else {
      node.next = this.head;
      this.head = node;
    }
  }


}

class Hashmap {
  constructor(size) {
    this.size = size;  
    this.storage = new Array(size)
  }

  hash(key) {
    const sumCharCode = key.split('').reduce((acc, char) => {
      let hashed = acc + char.charCodeAt(0);
      return hashed;
    }, 0);
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey; 
  }

  add(key, value) {
    const hash = this.hash(key);
    if (!this.storage[hash]) {
      const ll = new LinkedList();
      ll.prepend({ [key]: value });
      this.storage[hash] = ll;
    } else {
      this.storage[hash].prepend({ [key]: value });
    }
  }

  get(key) {
    try {
      const hash = this.hash(key);
      if (!this.storage[hash]) {
        return 'value does not exist!'
      }
      else {
        if (this.storage[hash].length !== 0) {
          let node = this.storage[hash].head; 
          while (node) {
            if (Object.keys(node.value)[0] === key) {
              let value = Object.values(node.value)[0];
              return value;
            }
            node = node.next;
          }
        } else {
          return Object.values(this.storage[hash].head.value)[0];
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  contain(key) {
    const hash = this.hash(key);
    if (this.storage[hash]) {
      return true;
    }
    else { return false; }
  }

}



// const hashmap = new Hashmap(4000);

// hashmap.add('one', 'test');
// hashmap.add('neo', 'test1');
// console.log(hashmap.get('neo'));




// console.table(hashmap.storage);
// console.log(hashmap.storage[2118].head);

module.exports = Hashmap;
