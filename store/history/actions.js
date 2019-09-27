import * as type from './type'
import HistoryService from '~/service/history'

const actions = {
    // Get Tansaction Data
    async getTransactionData({ commit }, { accessToken, fromDate, toDate }) {
        commit(type.REQUEST_TRANSACTION_DATA)
        const response = await HistoryService.getTransactionData(accessToken, fromDate, toDate)
        if (response.status === 200) {
            commit(type.GET_TRANSACTION_DATA_SUCCESS, { data: response.data.history, status: response.status })
        } else {
            commit(type.GET_TRANSACTION_DATA_FAIL, { data: response.data, status: response.status })
        }
    },

    // Get Statement Data
    async getStatementData({ commit }, { accessToken, fromDate, toDate }) {
        commit(type.REQUEST_STATEMENT_DATA)
        const response = await HistoryService.getStatementData(accessToken, fromDate, toDate)
        if (response.status === 200) {
            commit(type.GET_STATEMENT_DATA_SUCCESS, { data: response.data.history, status: response.status })
        } else {
            commit(type.GET_STATEMENT_DATA_FAIL, { data: response.data, status: response.status })
        }
    },

    // Get Transfer Data
    async getTransferData({ commit }, { accessToken, fromDate, toDate }) {
        commit(type.REQUEST_TRANSFER_DATA)
        const response = await HistoryService.getTransferData(accessToken, fromDate, toDate)
        if (response.status === 200) {
            commit(type.GET_TRANSFER_DATA_SUCCESS, { data: response.data.history, status: response.status })
        } else {
            commit(type.GET_TRANSFER_DATA_FAIL, { date: response.data, status: response.status })
        }
    }
}

export default actions