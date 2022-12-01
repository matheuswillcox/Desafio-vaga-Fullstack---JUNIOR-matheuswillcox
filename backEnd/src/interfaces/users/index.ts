export interface IUser {
    id: string
    name: string
    email: string
    password: string
    telefone: number

  


}

export interface IUserCreate {
    name: string
    email: string
    password: string
    telefone: number


}

export interface IcontactCreate {
    
    name: string
    email: string
    telefone: number
    userId: string

}

export interface IUserProfile {
    id: string
}

export interface IUserDelete {
    id: string
}


export interface IUserUpdate {
    id: string
    name: string
    email: string
    password: string
    telefone: number
    updated_at: Date

}

export interface IUserUpdated {

    name: string
    email: string
    password: string
    telefone: number
    updated_at: Date

}

export interface IUserWithoutPassword {
    id: string
    name: string
    email: string
    telefone: number
    created_at: Date
    updated_at: Date

}

export interface IUserLogin {
    email: string
    password: string
}
