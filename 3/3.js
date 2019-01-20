function countRecursiveFactorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * countRecursiveFactorial(num - 1);
  }
}

function countIterativeFactorial(num) {
  var rval = 1;
  for (var i = 2; i <= num; i++) {
    rval = rval * i;
  }
  return rval;
}

function countFibonacciNumber(num) {
  var a = 1,
    b = 0,
    temp;
  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  return b;
}

function checkPalindrome(str) {
  return (
    str ==
    str
      .split("")
      .reverse()
      .join("")
  );
}

function findAlphabeticalOrder(str) {
  return str
    .split("")
    .sort()
    .join("");
}

function findLongestWord(str) {
  var strSplit = str.split(" ");
  var longestWord = 0;
  var word = "";
  for (var i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      (longestWord = strSplit[i].length) && (word = strSplit[i]);
    }
  }
  return word;
}

function checkPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function checkType(param) {
  return typeof param;
}

// function findSecondHighest(arr) {
//     var secondHighest = arr.sort(function(a, b) { return b - a; })[1];
//     return secondHighest;
// }

function findSecondHighestAndLowestNumber(numbers) {
  numbers = numbers.sort(function(a, b) {
    return a - b;
  });
  numbers = numbers.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
  });

  if (numbers.length < 2) {
    return "Tablica ma mniej niz 2 elementy";
  } else {
    return (
      "Drugi najmniejszy: " +
      numbers[1] +
      "\n" +
      "Drugi najwiekszy: " +
      numbers[numbers.length - 2]
    );
  }
}

function amountTocoins(amount, coins) {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      left = amount - coins[0];
      return [coins[0]].concat(amountTocoins(left, coins));
    } else {
      coins.shift();
      return amountTocoins(amount, coins);
    }
  }
}

function binarySearch(items, num) {
  var firstIndex = 0,
    lastIndex = items.length - 1,
    middleIndex = Math.floor((lastIndex + firstIndex) / 2);

  while (items[middleIndex] != num && firstIndex < lastIndex) {
    if (num < items[middleIndex]) {
      lastIndex = middleIndex - 1;
    } else if (num > items[middleIndex]) {
      firstIndex = middleIndex + 1;
    }
    middleIndex = Math.floor((lastIndex + firstIndex) / 2);
  }

  return items[middleIndex] != num ? -1 : middleIndex;
}

var Me = {
  firstName: "Dominik",
  lastName: "Kowalski",
  indexNumber: 3,
  grades: [3, 3, 3, 5],
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(name) {
    var words = name.toString().split(" ");
    this.firstName = words[0] || "";
    this.lastName = words[1] || "";
  },
  fullInformation: function() {
    return (
      "Imie i nazwisko: " +
      this.fullName +
      ", Numer indeksu: " +
      this.indexNumber +
      ", Średnia ocen: " +
      this.gradeAverage()
    );
  },
  gradeAverage: function() {
    var avg = 0;
    for (var i = 0; i < this.grades.length; i++) {
      avg = avg + this.grades[i];
    }
    return avg / this.grades.length;
  }
};

function displayObjectPropertyTypes(object) {
  var x = "";
  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      x += property + ": " + typeof object[property] + "\n";
    }
  }
  return x;
}

function Student(firstName, lastName, indexNumber, grades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.indexNumber = indexNumber;
  this.grades = grades;

  //
  // // the same as below based on prototypes
  //

  // this.gradeAverage = function() {
  //     var avg = 0;
  //     for (var i = 0; i < this.grades.length; i++) {
  //         avg = avg + this.grades[i];
  //     }
  //     return (avg / this.grades.length);
  // }
  // this.fullInformation = function() { return "Imie: " + this.firstName + ", Nazwisko: " + this.lastName +
  // ", Numer indeksu: " + this.indexNumber + ", Średnia ocen: " + this.gradeAverage(); };
}

Student.prototype.gradeAverage = function() {
  var avg = 0;
  for (var i = 0; i < this.grades.length; i++) {
    avg = avg + this.grades[i];
  }
  return avg / this.grades.length;
};

Student.prototype.fullInformation = function() {
  if (typeof this.subjects === "undefined") {
    return (
      "Imie: " +
      this.firstName +
      ", Nazwisko: " +
      this.lastName +
      ", Numer indeksu: " +
      this.indexNumber +
      ", Średnia ocen: " +
      this.gradeAverage()
    );
  } else {
    return (
      "Imie: " +
      this.firstName +
      ", Nazwisko: " +
      this.lastName +
      ", Numer indeksu: " +
      this.indexNumber +
      ", Średnia ocen: " +
      this.gradeAverage() +
      ", Przedmioty: " +
      this.subjects
    );
  }
};

var s1 = new Student("Dominik", "Kowalski", 1, [3, 3, 3, 3]);
var s2 = new Student("Jon", "Snow", 2, [3, 3, 3, 5, 4]);
var s3 = new Student("Tyrion", "Lannister", 3, [5, 5, 5, 5, 4]);

function StudentWithPlan(firstName, lastName, indexNumber, grades, subjects) {
  this.base = Student;
  this.base(firstName, lastName, indexNumber, grades);
  this.subjects = subjects || [];
}

StudentWithPlan.prototype.fullInformation = function() {
  return (
    "Imie: " +
    this.firstName +
    ", Nazwisko: " +
    this.lastName +
    ", Numer indeksu: " +
    this.indexNumber +
    ", Średnia ocen: " +
    this.gradeAverage() +
    " " +
    this.subjects
  );
};

StudentWithPlan.prototype = Object.create(Student.prototype);

var s4 = new StudentWithPlan(
  "Joe",
  "Jones",
  4,
  [3, 3, 3, 3, 3],
  ["NAI", "MAS", "TIN", "BYT"]
);

console.log(
  "funkcja rekurencyjna liczaca silnie zadanej liczby:\n" +
    countRecursiveFactorial(5)
);
console.log(
  "funkcja iteracyjna liczaca silnie zadanej liczby:\n" +
    countIterativeFactorial(5)
);
console.log(
  "funkcja liczaca n-ty numer w ciagu fibonacciego:\n" + countFibonacciNumber(5)
);
console.log(
  "funkcja sprawdzajaca czy slowo jest palindromem:\n" +
    checkPalindrome("kajak")
);
console.log(
  "funkcja zwracajaca ciag alfabetyczny:\n" + findAlphabeticalOrder("kajak")
);
console.log(
  "funkcja zwracajaca najdluzsze slowo ze stringa:\n" +
    findLongestWord("konstanty marian mariusz czechoslowacja")
);
console.log(
  "funkcja sprawdzajaca czy liczba jest l.pierwsza:\n" + checkPrime(1)
);
console.log(
  "funkcja sprawdzajaca typ otrzymanego parametru:\n" + checkType(10)
);
console.log(
  "funkcja zwracajaca druga najwieksza i druga najmniejsza liczbe z tablicy liczb:\n" +
    findSecondHighestAndLowestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);
console.log(
  "funkcja zwracajaca podana liczbe w podanych nominałach:\n" +
    amountTocoins(46, [10, 25, 5, 2, 1])
);
console.log(
  "funkcja binarnego wyszukiwania w zadanej tablicy:\n" +
    binarySearch([1, 2, 3, 4, 5], 5)
);
console.log(
  "funkcja wyswietlajaca typy parametrow podanego obiektu:\n\n" +
    displayObjectPropertyTypes(Me)
);
console.log(Me.fullInformation());
console.log(s1.fullInformation());
console.log(s2.fullInformation());
console.log(s3.fullInformation());
console.log(s4.fullInformation());
