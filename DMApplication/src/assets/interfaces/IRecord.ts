export interface IRecord<model> {
    id: string;
    fields: model;
    createdTime: string;

    /**
     * returns the id of this record
     */
    getId(): string;

    /**
     * return the value from a given column
     * 
     * @param columnName The name of the column you want the value from
     */
    get(columnName: string): string;
    
    /**
     * sets the value of given column to given value
     * 
     * @param columnName the name of the column to edit
     * @param columnValue the new value of the cell
     */
    set(columnName: string, columnValue: string): void;
}