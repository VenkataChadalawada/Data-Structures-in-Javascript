class Node{
    constructor(val){
        this.val = val;
        this.startTag = '<'+val+'>';
        this.endTag = '<'+val+'/>';
        this.children = [];
        this.innerHTML = '';
    }
    appendChild(domElement){
         this.children.push(domElement);
    }
}

class Document extends Node{
    constructor(){
        super('html');
    }
    createElement(domElementType){
        return new Node(domElementType);
    }
    
    render(){
        let DOM = '';
        let tabspace='';
        function dfs(node, tabspace=''){
            var curTab = tabspace;
            DOM+=node.startTag+'\n';
            DOM+=node.innerHTML;
            curTab+='\t';
            DOM+=curTab;
            node.children.map((ele)=> dfs(ele, curTab));
            // DOM-=tabspace;
            DOM+='\n'+node.endTag;
        }
        dfs(this, tabspace);
        console.log(DOM);
    }
}



const document = new Document();
const body = document.createElement('body'); // Node - body
const div = document.createElement('div'); // Node - div
div.innerHTML = 'Inside of a div!';
document.appendChild(body); // html - childen [body - children[div] ]
body.appendChild(div);
document.render();

// <html>
//  <body>
//    <div>
//    Inside of a div!
//    </div>
//  </body>
// </html>
