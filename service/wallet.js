import axios from '~/plugins/axios'
import LANGUAGE from '~/middleware/getLanguage'
import JWT from '~/middleware/jwt'
import { API_DOMAIN, THIRDPARTY } from '~/environment'

class WalletService {
    // Get Wallets
    static async getWallets(payload) {
        let response = null
        let accessToken = JWT.sign(payload)

        try {
            response = await axios({
                method: 'GET',
                timeout: 5000,
                url: 'api/member/wallets',
                baseURL: API_DOMAIN,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                    'Accept-Language': LANGUAGE.getLanguage()
                }
            })
        } catch (error) {
            if (error.response) return error.response
            else return error
        }

        return response
    }

    // Get Limits
    static async getLimits(payload) {
        let response = null
        let accessToken = JWT.sign(payload)

        try {
            response = await axios({
                method: 'GET',
                timeout: 5000,
                url: 'api/member/limits',
                baseURL: API_DOMAIN,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                    'Accept-Language': LANGUAGE.getLanguage()
                }
            })
        } catch (error) {
            if (error.response) return error.response
            else return error
        }

        return response
    }

    // Get Deposit Banks
    static async getDepositBanks(payload) {
        let response = null
        let accessToken = JWT.sign(payload)

        try {
            response = await axios({
                method: 'GET',
                timeout: 5000,
                url: 'api/member/deposit/banks',
                baseURL: API_DOMAIN,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                    'Accept-Language': LANGUAGE.getLanguage()
                }
            })
        } catch (error) {
            if (error.response) return error.response
            else return error
        }

        return response
    }

    // Get Withdrawal Banks
    static async getWithdrawalBanks(payload) {
        let response = null
        let accessToken = JWT.sign(payload)

        try {
            response = await axios({
                method: 'GET',
                timeout: 5000,
                url: 'api/member/withdraw/banks',
                baseURL: API_DOMAIN,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                    'Accept-Language': LANGUAGE.getLanguage()
                }
            })
        } catch (error) {
            if (error.response) return error.response
            else return error
        }

        return response
    }

    // Get Balance
    static async getBalance(payload, productCode) {
        let response = null
        let accessToken = JWT.sign(payload)

        try {
            response = await axios({
                method: 'GET',
                timeout: 5000,
                url: `api/member/wallet/${productCode}`,
                baseURL: API_DOMAIN,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                    'Accept-Language': LANGUAGE.getLanguage()
                }
            })
        } catch (error) {
            if (error.response) return error.response
            else return error
        }

        return response
    }

    // Get Bonus
    static async getBonus(payload) {
        let response = null
        let accessToken = JWT.sign(payload)

        try {
            response = await axios({
                method: 'GET',
                timeout: 5000,
                url: `api/member/bonus`,
                baseURL: API_DOMAIN,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                    'Accept-Language': LANGUAGE.getLanguage()
                }
            })
        } catch (error) {
            if (error.response) return error.response
            else return error
        }

        return response
    }

    // Deposit
    static async deposit(payload, formData) {
        let response = null
        let accessToken = JWT.sign(payload)

        try {
            response = await axios({
                method: 'POST',
                timeout: 5000,
                url: `api/member/deposit`,
                baseURL: API_DOMAIN,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                    'Accept-Language': LANGUAGE.getLanguage()
                },
                data: formData
            })
        } catch (error) {
            if (error.response) return error.response
            else return error
        }

        return response
    }

    // Thirdparty Payment
    static async thirdpartyPayment(payload, method) {
        let response = null
        let accessToken = JWT.sign(payload)

        try {
            response = await axios({
                method: 'POST',
                timeout: 15000,
                url: method === 'qr' ? `api/member/quickpay/${THIRDPARTY}/qr` : `api/member/quickpay/${THIRDPARTY}/bank`,
                baseURL: API_DOMAIN,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                    'Accept-Language': LANGUAGE.getLanguage()
                },
            })
        } catch (error) {
            if (error.response) return error.response
            else return error
        }

        return response
    }

    // Withdrawal
    static async withdrawal(payload) {
        let response = null
        let accessToken = JWT.sign(payload)

        try {
            response = await axios({
                method: 'POST',
                timeout: 15000,
                url: `api/member/withdraw`,
                baseURL: API_DOMAIN,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                    'Accept-Language': LANGUAGE.getLanguage()
                }
            })
        } catch (error) {
            if (error.response) return error.response
            else return error
        }

        return response
    }

    // Transfer
    static async transfer(payload) {
        let response = null
        let accessToken = JWT.sign(payload)

        try {
            response = await axios({
                method: 'POST',
                timeout: 15000,
                url: `api/member/transfer`,
                baseURL: API_DOMAIN,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                    'Accept-Language': LANGUAGE.getLanguage()
                }
            })
        } catch (error) {
            if (error.response) return error.response
            else return error
        }

        return response
    }
}

export default WalletService