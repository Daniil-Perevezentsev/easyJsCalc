"use strict";

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Запустить калькулятор?",
  function() { choice()},
  function() { alert("Вы отменили выполнение."); }
);

function choice()
{
  let input = prompt(`Выберите цифру: сложение(1), вычитание(2), умножение(3), деление(4), степень(5)`)

  switch (input)
  {
    case '1':
    sum()
    break;

    case '2'://Вычитание
      sub();
      break;
    case '3':
      mul();
      break;

    case '4':
      div();
      break;
    case '5':
      step();
      break;
    default:
  }

}

function sum()
{
 let a = Number(prompt(`Введите первое значение`))
  let b = Number(prompt(`Введите второе значение`))
  alert(a + b)
  return choice();
};

function sub()
{
  let a = Number(prompt(`Введите первое значение`))
  let b = Number(prompt(`Введите второе значение`))
  alert(a - b)
  return choice();
};

function mul () //умножение
{
  let a = Number(prompt(`Введите первое значение`))
  let b = Number(prompt(`Введите второе значение`))
  alert(a * b)
  return choice();
};

function div () //деление
{
  let a = Number(prompt(`Введите первое значение`))
  let b = Number(prompt(`Введите второе значение`))
  alert(a / b)
  return choice();
};

function step () //степень
{
  let a = Number(prompt(`Введите основание`))
  let b = Number(prompt(`Введите показатель`))
  alert(a ** b)
  return choice();
};



