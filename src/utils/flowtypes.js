/**
 * @flow
 */

export type ForeignKeyType = {
    references: {
        id: string,
        name: string
    },
    on: {
        id: string,
        name: string
    }
};

export type ColumnType = {
    id: string,
    name: string,
    type: string,
    comment: string,
    autoInc: boolean,
    unique: boolean,
    index: boolean,
    unsigned: boolean,
    nullable: boolean,
    length: string,
    defValue: string,
    foreignKey: ForeignKeyType
};

export type TableType = {
    id: string,
    name: string,
    softDelete: boolean,
    timeStamp: boolean
};

export type RelationType = {
    source: {
        tableId: string,
        columnId: string
    },
    target: {
        tableId: string,
        columnId: string
    }
};

export type TablePositionType = {
    id: string,
    x: number,
    y: number
};
