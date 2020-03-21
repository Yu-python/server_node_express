import { Request, Response } from 'express'
import User from '../entity/User.entity'
import userService from '../service/user.service'
import AdminResponse from '../utils/AdminResponse'

export default {

    updateUser: async function (req: Request, res: Response) {
        const { userId, nickname, avatarUrl, address, gender } = req.body

        if (!userId) {
            return res.json(AdminResponse.failure('用户ID(userId)不能为空'))
        }

        const params = new User()
        params.id = userId
        params.nickname = nickname
        params.avatarUrl = avatarUrl
        params.address = address
        params.gender = gender

        try {
            const user = await userService.updateUser(params)
            res.json(AdminResponse.success(user))
        } catch (e) {
            console.log('[-] routes > user > updateUser()', e.message)
            res.json(AdminResponse.failure('修改用户信息失败'))
        }
    },

}