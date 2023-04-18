function createTableBody() {
    let rows = document.getElementById('rowInput').value;
    rows = parseInt(rows);
    let cells = document.getElementById('cellsInput').value;
    cells = parseInt(cells);

    let table = document.getElementById('my-table');  
    table.innerHTML = ("<tr>" + "<td></td>".repeat(cells) + "</tr>").repeat(rows);
  };

function tableFill() {
    let fillFrom = 1;  
    let td = document.querySelectorAll('#my-table td');
    
    for( let i = 0; i < td.length; i++ ) {
      td[i].textContent = fillFrom++;
    }
  }

const rowInput = document.getElementById('rowInput');
const cellsInput = document.getElementById('cellsInput');

rowInput.addEventListener(
    "keyup",
    (event) => {
        createTableBody()
        tableFill()
    },
    true
  );

  cellsInput.addEventListener(
    "keyup",
    (event) => {
        createTableBody()
        tableFill()
    },
    true
  );

  createTableBody()
        tableFill()

