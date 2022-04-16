class Node{
    constructor(row, col){
        this.row = row
        this.col = col
        this.class_names = standard_class_names
        this.id = ""
    }

    add_important_position(importancy){
        // If the important position is not already used
        if(!important_position_information[importancy]['used']){
            important_position_information[importancy]['used'] = true
            important_position_information[importancy]['row'] = this.row
            important_position_information[importancy]['col'] = this.col    

            // If the start and end positions are added to the board
            if(important_position_information['start']['used'] && important_position_information['end']['used']){
                run_button.disabled = false // Enable the run button for the pathfinding

                important_position_information['both_used'] = true // If the start/end positions are both on the board
            }

            // If the start position must be added
            if(importancy == "start"){
                this.class_names += " fas fa-arrow-right bg-success" // Add the start styling to the node as classes
            }
            
            // If the end position must be added
            else{
                this.class_names += " fas fa-home bg-danger" // Add the end styling to the node as classes
            }

            this.id = importancy
        }
    }

    delete_important_position(){
        run_button.disabled = true // Disable the run button for the pathfinding
        important_position_information['both_used'] = false // If the board misses the start or end position

        important_position_information[this.id]['used'] = false
        important_position_information[this.id]['row'] = null
        important_position_information[this.id]['col'] = null

        this.class_names = standard_class_names
        this.id = ""
    }

    wall(){
        this.className = standard_class_names
        this.id = "wall"
    }
}


// Get the position of the node inside the board
function node_position(node_element){
    const parent = node_element.parentElement // Parent of the node

    const row = Array.from(document.getElementById("nodes").children).indexOf(parent) // Row of the node
    const col = Array.from(parent.children).indexOf(node_element) // Column of the node

    return [row, col]
}

function get_node_element(row, col){
    const element_row = document.getElementById('nodes').children[row] // Row of the node

    const element = element_row.children[col] // Get the element

    return element
}


// For each node on the board
document.querySelectorAll("#nodes>div>div").forEach(function(node_element){
    const [row, col] = node_position(node_element) // Get the row and column of the element

    const node = new Node(row, col) // Add the element to the class

    node_element.id = node.id // Add the standard id to the element
    node_element.className = node.class_names // Add the standard classes to the element

    // When the node gets clicked on
    node_element.onclick = () => {
        // If the node is the start or end position
        if(node.id in important_position_information){
            node.delete_important_position() // Delete the importancy

            node_element.className = node.class_names
            node_element.id = node.id
        }
        
        // If the node is not the start or end node
        else{
            // First add the start position then the end position on the board
            const importancy = important_position_information['start']['used'] ? "end" : "start"

            node.add_important_position(importancy) // Change the node to the start or end position

            node_element.className = node.class_names
            node_element.id = node.id
        }
    }

    // If the user hovers over the node
    node_element.addEventListener("mouseover", function(mouse_event){
        // If the node is not an important node or a wall
        if(mouse_event.buttons == 1 && node_element.id != "wall" && !important_position_information[node.id]){
            node.wall() // Change the node to the wall

            node_element.className = node.class_names
            node_element.id = node.id
        }
    });
});