import { Node } from "./node.js";

export class Board {
    constructor(row, node) {
        this._board = document.getElementById("board");
        this._node = node;
        this.nodes = {};
        this._row = row;
        this.nodeHeight = node.offsetHeight;
        this.nodeWidth = node.offsetWidth;
        this.unweightedAlgorithms = ["bfs", "dfs"]; 
        this.init();
    }

    get maxWidth() {
        let width = window.innerWidth;
        return width;
    }

    get maxHeight() {
        let height = window.innerHeight;
        return height;
    }

    get rowChange() {
        let boardTop = this._board.getBoundingClientRect().top * 1.3;
        let maxHeight = this.maxHeight;
        let height = maxHeight - boardTop;
        let rowChange = Math.floor(height / this.nodeHeight) - 1;
        return rowChange;
    }

    get columnChange() {
        let maxWidth = this.maxWidth;
        let columnChange = Math.floor(maxWidth / this.nodeWidth) - 1;
        return columnChange * 0.9;
    }

    addNode(row, rowIndex, nodeIndex) {
        let node = new Node(row, this._node, nodeIndex, this.unweightedAlgorithms);
        this.nodes[rowIndex].push(node)
    }

    addNodes() {
        let columnChange = this.columnChange;
        let rows = this._board.children;

        for(let [rowIndex, row] of Object.entries(rows)) {
            let currentColumns = row.children.length;
            let columnsAmount = columnChange - currentColumns;

            this.nodes[rowIndex] = [];
            for(let nodeIndex = 0; nodeIndex < columnsAmount; nodeIndex++) {
                this.addNode(row, rowIndex, nodeIndex);
            }
        }
    }

    addRow() {
        let row = this._row.cloneNode(true);
        row.removeAttribute("id");
        this._board.appendChild(row);
    }

    addRows() {
        for(let i = 0; i < this.rowChange; i++) {
            this.addRow();
        }
    }

    randomWalls() {
        let nodes = this.nodes;

        // For every node, pick a random %. If the % is lower than 0.33, add the wall styling
        for(let row of Object.values(nodes)) {
            for(let node of row) {
                let random = Math.random();
                if(random < 0.25) {
                    node.addStyling('wall');
                }
            }
        }
    }

    randomWeights() {
        // Get pencil weight options
        let pencil = document.getElementById("pencilOptions");

        // Get every weight inside the pencil options
        let pencilWeights = Array.from(pencil.children).filter(child => child.innerText.toLowerCase().includes("weight"));

        // For every node, pick a random weight and random %. If the % is lower than 0.33, add the weight styling        
        for(let row of Object.values(this.nodes)) {
            for(let node of row) {
                // Weight styling
                let stylingIndex = Math.floor(Math.random() * pencilWeights.length);
                let styling = pencilWeights[stylingIndex].innerText.toLowerCase().trim();

                let random = Math.random();
                if(random < 0.25) {
                    node.addStyling(styling);
                }
            }
        }
    }

    clearAlgorithm() {
        let algorithmStyling = ["next", "fastest", "visited"];

        // Clear every node on the board that has an algorithm styling
        for(let row of Object.values(this.nodes)) {
            for(let node of row) {
                if(!algorithmStyling.includes(node.styling)) { continue; }         
                node.removeStyling(node.styling);
            }
        }
    }

    clear() {
        // Clear every node
        for(let row of Object.values(this.nodes)) {
            for(let node of row) {              
                node.erase();
            }
        }
    }

    clearWeights() {
        for(let row of Object.values(this.nodes)) {
            for(let node of row) {
                if(node.classList.contains("weight")) {
                    node.erase();
                }
            }
        }
    }

    clearWalls() {
        for(let row of Object.values(this.nodes)) {
            for(let node of row) {
                if(node.styling === "wall") {
                    node.erase();
                }
            }
        }
    }

    updateLayout(layout) {
        switch(layout) {
            case "random-walls":
                this.randomWalls();
                break;
            case "random-weights":
                this.randomWeights();
                break;
            default:
                throw new Error("Layout option not found");
        }
    }

    clearBoard(clear) {
        switch(clear) {
            case "walls":
                this.clearWalls();
                break;
            case "weights":
                this.clearWeights();
                break;
            case "path":
                this.clearAlgorithm();
                break;
            case "all":
                this.clear();
                break;
            default:
                throw new Error("Clear option not found");
        }
    }

    init() {
        // Remove the node that was already created
        this._node.remove();

        // Initialize the board
        this.addRows();
        this.addNodes();
    }
}