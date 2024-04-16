export enum E_FUNNEL_STATUS {
    ACTIVE = 'Active',
    INACTIVE = 'Inactive',
}

export interface IFunnel {
    id: number;
    name: string;
    website: string;
    status: E_FUNNEL_STATUS;
    createdAt: Date;
    updatedAt: Date;
}
