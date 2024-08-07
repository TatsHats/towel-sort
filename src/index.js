// ------ Сортировка полотенец ------
// Разбиваем матрицу по рядам
// переворачиваем каждый четный ряд 
// объединяем ряды в один массив

function towelSort(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }

  return matrix.map((row, index) => {
      if (index % 2 === 0) {
          return row; // Четный ряд
      } else {
          return row.reverse(); // Нечетный ряд: переворачиваем строку
      }
  }).flat(); // Объединяем
}

module.exports = towelSort;