
let panels = {
    tool: {
        visible: false,
        object: document.getElementById('tool-panel'),
        toggleButton: document.getElementById('tool-panel-toggle'),
    },
    edit: {
        visible: false,
        object: document.getElementById('edit-panel'),
        toggleButton: document.getElementById('edit-panel-toggle'),
    }
}

panels.tool.toggleButton.addEventListener('click', () => togglePanel(panels.tool));
panels.edit.toggleButton.addEventListener('click', () => togglePanel(panels.edit));

function togglePanel(panel) {
    if (panel.visible) {
        panel.visible = false;
        panel.object.style.display = "none";
    } else {
        panel.visible = true;
        panel.object.style.display = "block";
    }
}

console.log(panels);

export default {
}