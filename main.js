const readFn = require('./read');
const createFN = require('./create')

const args = process.argv.slice(2);

const operation = args[0];
const CUDproduct = args[1];

const allowed = ["create", "read", "update", "delete"];

if (args.length === 0) {
  throw new Error("you didn't choosed enything");
} else if (!allowed.includes(operation)) {
  throw new Error(`the operation ${operation} in not CRUD`);
}

switch (operation) {
    case 'create':
        createFN(CUDproduct)
        break;

    case 'read':
        console.log(readFn());
        break;
}
