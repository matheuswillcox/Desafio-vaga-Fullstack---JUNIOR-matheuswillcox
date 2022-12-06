
import * as express from 'express'
import {User} from "../../entities/user.entity"
declare global{
    namespace Express{
        interface Request{
            decoded: Partial<User>
            userId: string
            name: string
        }
    }
}