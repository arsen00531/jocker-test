import {configureStore} from '@reduxjs/toolkit'
import information from './information';
import ton from './ton';
import menuSlice from './menuSlice'
export default configureStore( {
    reducer : {
        information : information,
        ton : ton,
        menu : menuSlice
    }

});

