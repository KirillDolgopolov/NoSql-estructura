
db.createCollection( 'Gafas', {validator: {$jsonSchema: {bsonType: 'object',title:'Gafas',required: [         'marca',          'graduación_der',          'graduación_izq',          'montura',          'color de montura',          'color vidrio',          'precio',          'proveedor__id',          'venta'],properties: {marca: {bsonType: 'string'},graduación_der: {bsonType: 'decimal'},graduación_izq: {bsonType: 'decimal'},montura: {enum: flotante
pasta
metallica},color de montura: {bsonType: 'string'},color vidrio: {bsonType: 'string'},precio: {bsonType: 'decimal'},proveedor__id: {bsonType: 'objectId'},venta: {bsonType: 'objectId'}}         }      },
capped:
});  