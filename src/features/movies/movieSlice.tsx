import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import {APIKey} from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies: any = createAsyncThunk('movies/fetchAsyncMovies',
    async (term) => {
    const response = await movieApi.get(`?s=${term}&apikey=${APIKey}&type=movie`)
    return response.data
})

export const fetchAsyncShows: any = createAsyncThunk('movies/fetchAsyncShows',
    async (term) => {
    const response = await movieApi.get(`?s=${term}&apikey=${APIKey}&type=series`)
    return response.data
})

export const fetchAsyncMovieOrShowDetail: any = createAsyncThunk('movies/AsyncMovieOrShowDetail',
    async (id) => {
        const response = await movieApi.get(`?i=${id}&apikey=${APIKey}&plot=full`)
        console.log(response.data)
        return response.data
    })

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {}
}


const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload;
        },
        removeSelectedMovieOrShow:(state)=> {
            state.selectedMovieOrShow = {}
        }
    },

    // extraReducers: {
    //     [fetchAsyncMovies.pending]: () => {
    //         console.log('Pending');
    //     },
    //     [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
    //         console.log('Fetched successfully!')
    //         return {...state, movies: payload}
    //     },
    //     [fetchAsyncMovies.rejected]: () => {
    //         console.log('Rejected')
    //     },
    // }
//     extraReducers: {
//         [fetchAsyncMovies.pending]: () => {
//             console.log("Pending");
//         },
//         [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
//             console.log("Fetched Successfully!");
//             return { ...state, movies: payload };
//         },
//         [fetchAsyncMovies.rejected]: () => {
//             console.log("Rejected!");
//         },
//         [fetchAsyncShows.fulfilled]: (state, { payload }) => {
//             console.log("Fetched Successfully!");
//             return { ...state, shows: payload };
//         },
//         [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
//             console.log("Fetched Successfully!");
//             return { ...state, selectMovieOrShow: payload };
//         },
//     },
// });

    extraReducers: builder => {
        builder.addCase(fetchAsyncMovies.pending, () => {
            console.log('Pending')
        })
            .addCase(fetchAsyncMovies.fulfilled, (state, {payload}) => {
                console.log('Fetched successfully!')
                return {...state, movies: payload}
            })
            .addCase(fetchAsyncMovies.rejected, () => {
                console.log('Rejected')
            })
            .addCase(fetchAsyncShows.fulfilled, (state, {payload}) => {
                console.log('Fetched successfully!')
                return {...state, shows: payload}
            })
            .addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, {payload}) => {
                console.log('Fetched successfully!')
                return {...state, selectedMovieOrShow: payload}
            })
    }
})

export const {removeSelectedMovieOrShow} = movieSlice.actions
export const getAllMovies = (state: any) => state.movies.movies
export const getAllShows = (state: any) => state.movies.shows
export const getSelectedMovieOrShow = (state: any) => state.movies.selectedMovieOrShow
export default movieSlice.reducer