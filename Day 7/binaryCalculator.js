function createGrid(context) {
      var div = document.createElement("div");
      div.id = "res";
      context.appendChild(div);

      div = document.createElement("div");
      div.id = "btns";
      div.className = "btnContainer";
      context.appendChild(div);
      var btnId = ["btn0", "btn1", "btnClr", "btnEql", "btnSum", "btnSub", "btnMul", "btnDiv"];
      var btnhtml = [0, 1, "C", "=", "+", "-", "*", "/"];
      var btnFunc = function() {
        var text = this.innerHTML;
        var out = document.getElementById("res");

        if (text == "C") {
          out.innerHTML = "";
        } else if (text == "=") {
          out.innerHTML = compute(out.innerHTML);
        } else {
          out.innerHTML += text;
        }
      };

      var compute = function(text) {
        var operand = text.split(/[+-\/\*]/);
        console.log(operand);
        var operator = text[operand[0].length];
        console.log(operator);
        var op1 = parseInt(operand[0], 2);
        var op2 = parseInt(operand[1], 2);
        console.log(op1, op2);
        return eval(op1 + operator + op2).toString(2);
      }

      var ctx = document.getElementById("btns");
      for (var i = 0; i < 8; i++) {
        var button = document.createElement("button");
        button.id = btnId[i];
        button.className = "btnClass";
        button.innerHTML = btnhtml[i];
        button.addEventListener("click", btnFunc);
        ctx.appendChild(button);
      }
    }

        createGrid(document.body);
