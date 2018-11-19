const letters = [
    { id: 1, letter: 'a', points: 1, draggable: true },
    { id: 2, letter: 'a', points: 1, draggable: true },
    { id: 3, letter: 'a', points: 1, draggable: true },
    { id: 4, letter: 'a', points: 1, draggable: true },
    { id: 5, letter: 'a', points: 1, draggable: true },
    { id: 6, letter: 'a', points: 1, draggable: true },
    { id: 7, letter: 'a', points: 1, draggable: true },
    { id: 8, letter: 'a', points: 1, draggable: true },
    { id: 9, letter: 'a', points: 1, draggable: true },
    { id: 10, letter: 'b', points: 3, draggable: true },
    { id: 11, letter: 'b', points: 3, draggable: true },
    { id: 12, letter: 'c', points: 3, draggable: true },
    { id: 13, letter: 'c', points: 3, draggable: true },
    { id: 14, letter: 'd', points: 2, draggable: true },
    { id: 15, letter: 'd', points: 2, draggable: true },
    { id: 16, letter: 'd', points: 2, draggable: true },
    { id: 17, letter: 'd', points: 2, draggable: true },
    { id: 18, letter: 'e', points: 1, draggable: true },
    { id: 19, letter: 'e', points: 1, draggable: true },
    { id: 20, letter: 'e', points: 1, draggable: true },
    { id: 21, letter: 'e', points: 1, draggable: true },
    { id: 22, letter: 'e', points: 1, draggable: true },
    { id: 23, letter: 'e', points: 1, draggable: true },
    { id: 24, letter: 'e', points: 1, draggable: true },
    { id: 25, letter: 'e', points: 1, draggable: true },
    { id: 26, letter: 'e', points: 1, draggable: true },
    { id: 27, letter: 'e', points: 1, draggable: true },
    { id: 28, letter: 'e', points: 1, draggable: true },
    { id: 29, letter: 'e', points: 1, draggable: true },
    { id: 30, letter: 'f', points: 4, draggable: true },
    { id: 31, letter: 'f', points: 4, draggable: true },
    { id: 32, letter: 'g', points: 2, draggable: true },
    { id: 33, letter: 'g', points: 2, draggable: true },
    { id: 34, letter: 'g', points: 2, draggable: true },
    { id: 35, letter: 'h', points: 4, draggable: true },
    { id: 36, letter: 'h', points: 4, draggable: true },
    { id: 37, letter: 'i', points: 1, draggable: true },
    { id: 38, letter: 'i', points: 1, draggable: true },
    { id: 39, letter: 'i', points: 1, draggable: true },
    { id: 40, letter: 'i', points: 1, draggable: true },
    { id: 41, letter: 'i', points: 1, draggable: true },
    { id: 42, letter: 'i', points: 1, draggable: true },
    { id: 43, letter: 'i', points: 1, draggable: true },
    { id: 44, letter: 'i', points: 1, draggable: true },
    { id: 45, letter: 'i', points: 1, draggable: true },
    { id: 46, letter: 'j', points: 8, draggable: true },
    { id: 47, letter: 'k', points: 5, draggable: true },
    { id: 48, letter: 'l', points: 1, draggable: true },
    { id: 49, letter: 'l', points: 1, draggable: true },
    { id: 50, letter: 'l', points: 1, draggable: true },
    { id: 51, letter: 'l', points: 1, draggable: true },
    { id: 52, letter: 'm', points: 3, draggable: true },
    { id: 53, letter: 'm', points: 3, draggable: true },
    { id: 54, letter: 'n', points: 1, draggable: true },
    { id: 55, letter: 'n', points: 1, draggable: true },
    { id: 56, letter: 'n', points: 1, draggable: true },
    { id: 57, letter: 'n', points: 1, draggable: true },
    { id: 58, letter: 'n', points: 1, draggable: true },
    { id: 59, letter: 'n', points: 1, draggable: true },
    { id: 60, letter: 'o', points: 1, draggable: true },
    { id: 61, letter: 'o', points: 1, draggable: true },
    { id: 62, letter: 'o', points: 1, draggable: true },
    { id: 63, letter: 'o', points: 1, draggable: true },
    { id: 64, letter: 'o', points: 1, draggable: true },
    { id: 65, letter: 'o', points: 1, draggable: true },
    { id: 66, letter: 'o', points: 1, draggable: true },
    { id: 67, letter: 'o', points: 1, draggable: true },
    { id: 68, letter: 'p', points: 3, draggable: true },
    { id: 69, letter: 'p', points: 3, draggable: true },
    { id: 70, letter: 'q', points: 10, draggable: true },
    { id: 71, letter: 'r', points: 1, draggable: true },
    { id: 72, letter: 'r', points: 1, draggable: true },
    { id: 73, letter: 'r', points: 1, draggable: true },
    { id: 74, letter: 'r', points: 1, draggable: true },
    { id: 75, letter: 'r', points: 1, draggable: true },
    { id: 76, letter: 'r', points: 1, draggable: true },
    { id: 78, letter: 's', points: 1, draggable: true },
    { id: 79, letter: 's', points: 1, draggable: true },
    { id: 80, letter: 's', points: 1, draggable: true },
    { id: 81, letter: 's', points: 1, draggable: true },
    { id: 82, letter: 't', points: 1, draggable: true },
    { id: 83, letter: 't', points: 1, draggable: true },
    { id: 84, letter: 't', points: 1, draggable: true },
    { id: 85, letter: 't', points: 1, draggable: true },
    { id: 86, letter: 't', points: 1, draggable: true },
    { id: 87, letter: 't', points: 1, draggable: true },
    { id: 88, letter: 'u', points: 1, draggable: true },
    { id: 89, letter: 'u', points: 1, draggable: true },
    { id: 90, letter: 'u', points: 1, draggable: true },
    { id: 91, letter: 'u', points: 1, draggable: true },
    { id: 92, letter: 'v', points: 4, draggable: true },
    { id: 93, letter: 'v', points: 4, draggable: true },
    { id: 94, letter: 'w', points: 4, draggable: true },
    { id: 95, letter: 'w', points: 4, draggable: true },
    { id: 96, letter: 'x', points: 8, draggable: true },
    { id: 97, letter: 'y', points: 4, draggable: true },
    { id: 98, letter: 'y', points: 4, draggable: true },
    { id: 99, letter: 'z', points: 10, draggable: true },
    { id: 101, letter: 'blank', points: 0, draggable: true },
    { id: 102, letter: 'blank', points: 0, draggable: true }
]


export default letters



//  [ {
//     id: 1,
//     letter: 'a',
//     points: 1
//   },
//   {
//     id: 2,
//     letter: 'a',
//     points: 1
//   },
//   {
//     id: 3,
//     letter: 'a',
//     points: 1
//   },
//   {
//     id: 4,
//     letter: 'a',
//     points: 1
//   },
//   {
//     id: 5,
//     letter: 'a',
//     points: 1
//   },
//   {
//     id: 6,
//     letter: 'a',
//     points: 1
//   },
//   {
//     id: 7,
//     letter: 'a',
//     points: 1
//   },
//   {
//     id: 8,
//     letter: 'a',
//     points: 1
//   },
//   {
//     id: 9,
//     letter: 'a',
//     points: 1
//   },
//   {
//     id: 10,
//     letter: 'b',
//     points: 3
//   },
//   {
//     id: 11,
//     letter: 'b',
//     points: 3
//   },
//   {
//     id: 12,
//     letter: 'c',
//     points: 3
//   },
//   {
//     id: 13,
//     letter: 'c',
//     points: 3
//   },
//   {
//     id: 14,
//     letter: 'd',
//     points: 2
//   },
//   {
//     id: 15,
//     letter: 'd',
//     points: 2
//   },
//   {
//     id: 16,
//     letter: 'd',
//     points: 2
//   },
//   {
//     id: 17,
//     letter: 'd',
//     points: 2
//   },
//   {
//     id: 18,
//     letter: 'e',
//     points: 1
//   },
//   {
//     id: 19,
//     letter: 'e',
//     points: 1
//   },
//   {
//     id: 20,
//     letter: 'e',
//     points: 1
//   },
//   {
//     id: 21,
//     letter: 'e',
//     points: 1
//   },
//   {
//     id: 22,
//     letter: 'e',
//     points: 1
//   },
//   {
//     id: 23,
//     letter: 'e',
//     points: 1
//   },
//   {
//     id: 24,
//     letter: 'e',
//     points: 1
//   },
//   {
//     id: 25,
//     letter: 'e',
//     points: 1
//   },
//   {
//     id: 26,
//     letter: 'e',
//     points: 1
//   },
//   {
//     id: 27,
//     letter: 'e',
//     points: 1
//   },
//   {
//     id: 28,
//     letter: 'e',
//     points: 1
//   },
//   {
//     id: 29,
//     letter: 'e',
//     points: 1
//   },
//   {
//     id: 30,
//     letter: 'f',
//     points: 4
//   },
//   {
//     id: 31,
//     letter: 'f',
//     points: 4
//   },
//   {
//     id: 32,
//     letter: 'g',
//     points: 2
//   },
//   {
//     id: 33,
//     letter: 'g',
//     points: 2
//   },
//   {
//     id: 34,
//     letter: 'g',
//     points: 2
//   },
//   {
//     id: 35,
//     letter: 'h',
//     points: 4
//   },
//   {
//     id: 36,
//     letter: 'h',
//     points: 4
//   },
//   {
//     id: 37,
//     letter: 'i',
//     points: 1
//   },
//   {
//     id: 38,
//     letter: 'i',
//     points: 1
//   },
//   {
//     id: 39,
//     letter: 'i',
//     points: 1
//   },
//   {
//     id: 40,
//     letter: 'i',
//     points: 1
//   },
//   {
//     id: 41,
//     letter: 'i',
//     points: 1
//   },
//   {
//     id: 42,
//     letter: 'i',
//     points: 1
//   },
//   {
//     id: 43,
//     letter: 'i',
//     points: 1
//   },
//   {
//     id: 44,
//     letter: 'i',
//     points: 1
//   },
//   {
//     id: 45,
//     letter: 'i',
//     points: 1
//   },
//   {
//     id: 46,
//     letter: 'j',
//     points: 8
//   },
//   {
//     id: 47,
//     letter: 'k',
//     points: 5
//   },
//   {
//     id: 48,
//     letter: 'l',
//     points: 1
//   },
//   {
//     id: 49,
//     letter: 'l',
//     points: 1
//   },
//   {
//     id: 50,
//     letter: 'l',
//     points: 1
//   },
//   {
//     id: 51,
//     letter: 'l',
//     points: 1
//   },
//   {
//     id: 52,
//     letter: 'm',
//     points: 3
//   },
//   {
//     id: 53,
//     letter: 'm',
//     points: 3
//   },
//   {
//     id: 54,
//     letter: 'n',
//     points: 1
//   },
//   {
//     id: 55,
//     letter: 'n',
//     points: 1
//   },
//   {
//     id: 56,
//     letter: 'n',
//     points: 1
//   },
//   {
//     id: 57,
//     letter: 'n',
//     points: 1
//   },
//   {
//     id: 58,
//     letter: 'n',
//     points: 1
//   },
//   {
//     id: 59,
//     letter: 'n',
//     points: 1
//   },
//   {
//     id: 60,
//     letter: 'o',
//     points: 1
//   },
//   {
//     id: 61,
//     letter: 'o',
//     points: 1
//   },
//   {
//     id: 62,
//     letter: 'o',
//     points: 1
//   },
//   {
//     id: 63,
//     letter: 'o',
//     points: 1
//   },
//   {
//     id: 64,
//     letter: 'o',
//     points: 1
//   },
//   {
//     id: 65,
//     letter: 'o',
//     points: 1
//   },
//   {
//     id: 66,
//     letter: 'o',
//     points: 1
//   },
//   {
//     id: 67,
//     letter: 'o',
//     points: 1
//   },
//   {
//     id: 68,
//     letter: 'p',
//     points: 3
//   },
//   {
//     id: 69,
//     letter: 'p',
//     points: 3
//   },
//   {
//     id: 70,
//     letter: 'q',
//     points: 10
//   },
//   {
//     id: 71,
//     letter: 'r',
//     points: 1
//   },
//   {
//     id: 72,
//     letter: 'r',
//     points: 1
//   },
//   {
//     id: 73,
//     letter: 'r',
//     points: 1
//   },
//   {
//     id: 74,
//     letter: 'r',
//     points: 1
//   },
//   {
//     id: 75,
//     letter: 'r',
//     points: 1
//   },
//   {
//     id: 76,
//     letter: 'r',
//     points: 1
//   },
//   {
//     id: 78,
//     letter: 's',
//     points: 1
//   },
//   {
//     id: 79,
//     letter: 's',
//     points: 1
//   },
//   {
//     id: 80,
//     letter: 's',
//     points: 1
//   },
//   {
//     id: 81,
//     letter: 's',
//     points: 1
//   },
//   {
//     id: 82,
//     letter: 't',
//     points: 1
//   },
//   {
//     id: 83,
//     letter: 't',
//     points: 1
//   },
//   {
//     id: 84,
//     letter: 't',
//     points: 1
//   },
//   {
//     id: 85,
//     letter: 't',
//     points: 1
//   },
//   {
//     id: 86,
//     letter: 't',
//     points: 1
//   },
//   {
//     id: 87,
//     letter: 't',
//     points: 1
//   },
//   {
//     id: 88,
//     letter: 'u',
//     points: 1
//   },
//   {
//     id: 89,
//     letter: 'u',
//     points: 1
//   },
//   {
//     id: 90,
//     letter: 'u',
//     points: 1
//   },
//   {
//     id: 91,
//     letter: 'u',
//     points: 1
//   },
//   {
//     id: 92,
//     letter: 'v',
//     points: 4
//   },
//   {
//     id: 93,
//     letter: 'v',
//     points: 4
//   },
//   {
//     id: 94,
//     letter: 'w',
//     points: 4
//   },
//   {
//     id: 95,
//     letter: 'w',
//     points: 4
//   },
//   {
//     id: 96,
//     letter: 'x',
//     points: 8
//   },
//   {
//     id: 97,
//     letter: 'y',
//     points: 4
//   },
//   {
//     id: 98,
//     letter: 'y',
//     points: 4
//   },
//   {
//     id: 99,
//     letter: 'z',
//     points: 10
//   },
//   {
//     id: 101,
//     letter: 'blank',
//     points: 0
//   },
//   {
//     id: 102,
//     letter: 'blank',
//     points: 0
//   }

// ]





