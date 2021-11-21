// quick.db modified defenitions

interface Database {
    /**
     * This function fetches data from a key in the database.
     * @param key Any string as a key. Also allows for dot notation following the key.
     * @param ops Any options to be added to the request.
     */
    fetch<K>(key: string): K | null;

    /**
     * This function fetches data from a key in the database.
     * @param key Any string as a key. Also allows for dot notation following the key.
     * @param ops Any options to be added to the request.
     */
    get<K>(key: string): K | null;

    /**
     * This function sets new data based on a key in the database. 
     * @param key Any string as a key. Also allows for dot notation following the key.
     * @param value Value to set.
     * @param ops Any options to be added to the request.
     */
    set<K>(key: string, value: any): K | null;

    /**
     * This function adds a number to a key in the database. (If no existing number, it will add to 0)
     * @param key Any string as a key. Also allows for dot notation following the key.
     * @param value Any numerical value.
     * @param ops Any options to be added to the request.
     */
    add<K>(key: string, value: number): K | null;

    /**
     * This function subtracts a number to a key in the database. (If no existing number, it will subtract from 0)
     * @param key Any string as a key. Also allows for dot notation following the key.
     * @param value Any numerical value.
     * @param ops Any options to be added to the request.
     */
    subtract<K>(key: string, value: number): K | null;

    /**
     * This function will push into an array in the database based on the key. (If no existing array, it will create one)
     * @param key Any string as a key. Also allows for dot notation following the key.
     * @param value Any data to push.
     * @param ops Any options to be added to the request.
     */
    push<K>(key: string, value: K): K[] | null[];

    /**
     * This function returns a boolean indicating whether an element with the specified key exists or not.
     * @param key Any string as a key. Also allows for dot notation following the key, this will return if the prop exists or not.
     * @param ops Any options to be added to the request.
     */
    has(key: string): boolean;

    /**
     * This function fetches the entire active table
     * @param ops Any options to be added to the request.
     */
    all(): { ID: string; data: any; }[];
}

export = Database