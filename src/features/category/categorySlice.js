import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories:[],
    raions:[
        'Baki',
        'Abşeron',
        'Ağcabədi',
        'Ağdam',
        'Ağdaş',
        'Ağstafa',
        'Ağsu',
        'Astara',
        'Balakən',
        'Bərdə',
        'Beyləqan',
        'Biləsuvar',
        'Cəbrayıl',
        'Cəlilabad',
        'Daşkəsən',
        'Füzuli',
        'Gədəbəy',
        'Goranboy',
        'Göyçay',
        'Göygöl',
        'Göytəpə',
        'Hacıqabul',
        'İmişli',
        'İsmayıllı',
        'Kəlbəcər',
        'Kürdəmir',
        'Laçın',
        'Lənkəran',
        'Lerik',
        'Masallı',
        'Neftçala',
        'Oğuz',
        'Ordubad',
        'Qəbələ',
        'Qax',
        'Qazax',
        'Qobustan',
        'Quba',
        'Qubadlı',
        'Qusar',
        'Saatlı',
        'Sabirabad',
        'Şabran',
        'Şəki',
        'Şəmkir',
        'Samux',
        'Şamaxı',
        'Şirvan',
        'Siyəzən',
        'Sumqayıt',
        'Şuşa',
        'Tərtər',
        'Tovuz',
        'Ucar',
        'Xaçmaz',
        'Yardımlı',
        'Yevlax',
        'Zaqatala',
        'Zəngilan',
        'Zərdab'
      ]
      
};

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategories: (state,{payload}) => {
            state.categories = payload
        }
    },
});

export const {setCategories} = categorySlice.actions;
export default categorySlice.reducer;
