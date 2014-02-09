//Matrix Multiplication in Javascript, written by Karl Jakober
//for Dr Gregory Bards Numerical Analysis II Class.
//Project Zero

//x = height of matrix
//y = width of matrix

$(document).ready(function() {
  //ensure matrix size definitions are positive, and dont allow decimals
  $("input.matrixdef").numeric({ decimal: false, negative: false }, function() { alert("Positive integers only"); this.value = ""; this.focus(); });

  //keep an eye on the n field, if it changes, change the other n field
  function declareBinds() {
    //ensure our matrix inputs are numeric (pos or negative, can have decimals)
    $("input.matrixInput").numeric();
    
    $("#n1").keyup(function(){
      $("#n2").val(this.value);
      setHeight('matrix2', this.value);
      setWidth('matrix1', this.value);
      setMatrixValues();
      drawFinalMatrix(matrix1, matrix2);
    });
  
    $("#n2").keyup(function(){
      $("#n1").val(this.value);
      setHeight('matrix2', this.value);
      setWidth('matrix1', this.value);
      setMatrixValues();
      drawFinalMatrix(matrix1, matrix2);
    });
  
    $("#m").keyup(function () {
      setHeight('matrix1', this.value);
      setMatrixValues();
      drawFinalMatrix(matrix1, matrix2);
    });
  
    $("#l").keyup(function () {
      setWidth('matrix2', this.value);
      setMatrixValues();
      drawFinalMatrix(matrix1, matrix2);
    });
  
    $(".matrixInput").keyup(function(){
      setMatrixValues();
      drawFinalMatrix(matrix1, matrix2);
    });
  }
  declareBinds();

  //define matrixes
  var finalMatrix = {},
      matrix1 = [[1,2],
                 [4,5],
                 [6,7],
                 [-6,2]],
      matrix2 = [[5,3,2],
                 [3,4,7]];

  var cols = {},
      rows = {};

      cols.matrix1 = matrix1[0].length;
      rows.matrix1 = matrix1.length;
      cols.matrix2 = matrix2[0].length;
      rows.matrix2 = matrix2.length;
      rows.finalMatrix = matrix1.length;
      cols.finalMatrix = matrix2[0].length;

  function setMatrixValues() {
    matrix1 = [];
    matrix2 = [];
    x = 0;
    $('#matrix1').find('tr').each(function () {
      y = 0;
      if (matrix1[x] === undefined) {
        matrix1[x] = [];
      }
      $(this).find('td').each(function () {
        matrix1[x][y] = $(this).find("input").val();
        y += 1;
      });
      x += 1;
    });
    x = 0;
    $('#matrix2').find('tr').each(function () {
      y = 0;
      if (matrix2[x] === undefined) {
        matrix2[x] = [];
      }
      $(this).find('td').each(function () {
        matrix2[x][y] = $(this).find("input").val();
        y += 1;
      });
      x += 1;
    });
  }

  function drawFinalMatrix(matrix1, matrix2) {
    var tbl = $('<table class="matrix"></table>');
    for (var i = 0; i < matrix1.length; i++) {
      tr = $('<tr></tr>');
      for (var j = 0; j < matrix2[0].length; j++) {
        var sum = 0;
        for (k = 0; k < matrix1[0].length; k++) {
          sum += matrix1[i][k] * matrix2[k][j];
        }
        td = $('<td>' + sum + '</td>');
        tr.append(td);
      }
      tbl.append(tr);
    }
    $('.finalMatrix').empty().append(tbl);
  }

  function setWidth(matrixid, newx) {
      var xchange = newx - cols[matrixid];
      if (xchange < 0) {
          for (x = xchange; x < 0; x += 1) {
              $('#' + matrixid + ' tr').find('th:last, td:last').remove();
          }
      }
      if (xchange > 0) {
          $('#' + matrixid).find('tr').each(function () {
              $(this).find('td').eq(-1).after(Array(xchange + 1).join("<td><input type=\"text\" size=\"3\" class=\"matrixInput\" /></td>"));
          });
      }
      cols[matrixid] = newx;
      declareBinds();
  }

  function setHeight(matrixid, newy) {
    var tbl = $('#' + matrixid);
    var ychange = newy - rows[matrixid];
    if (ychange < 0) {
        for (y = ychange; y < 0; y += 1) {
            tbl.find('tr:last').remove();
        }
    }
    if (ychange > 0) {
        for (y = 1; y <= ychange; y += 1) {
            tr = $('<tr></tr>');
            for (x = 1; x <= cols[matrixid]; x += 1) {
                td = $('<td><input type=\"text\" size=\"3\" class=\"matrixInput\" /></td>');
                tr.append(td);
            }
            tbl.append(tr);
        }
    }
    rows[matrixid] = newy;
    declareBinds();

  }
});



