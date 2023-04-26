
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
    COMPANY = "COMPANY"
}

export enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}

export enum QuestionType {
    MCQ = "MCQ",
    SLIDER = "SLIDER",
    TANDF = "TANDF",
    PERCENTAGE = "PERCENTAGE"
}

export enum LicenseType {
    FREE = "FREE",
    BUSINESS = "BUSINESS",
    PREMIUM = "PREMIUM",
    PLATINUM = "PLATINUM"
}

export interface LoginUserInput {
    email: string;
    password: string;
}

export interface SignUpUserInput {
    email: string;
    password: string;
}

export interface Auth {
    token: string;
    id: number;
    name?: Nullable<string>;
    email: string;
    password: string;
    contact?: Nullable<string>;
    companyId?: Nullable<number>;
    address?: Nullable<string>;
    profession?: Nullable<string>;
    role: Role;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Principle {
    id: number;
    name: string;
    description: string;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    QuestionBank: QuestionBank[];
}

export interface QuestionAns {
    answer: string;
    mark: number;
    rec: string;
}

export interface QuestionBank {
    id: number;
    questionType: QuestionType;
    questionPlan: LicenseType;
    status: Status;
    question: string;
    answer: QuestionAns[];
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    principle: Principle;
}

export interface User {
    id: number;
    name?: Nullable<string>;
    email?: Nullable<string>;
    contact?: Nullable<string>;
    address?: Nullable<string>;
    profession?: Nullable<string>;
    role: Role;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Company {
    id: number;
    name?: Nullable<string>;
    logo?: Nullable<string>;
    website?: Nullable<string>;
    email?: Nullable<string>;
    ctoContact?: Nullable<string>;
    description?: Nullable<string>;
    address?: Nullable<string>;
    role: Role;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Project {
    id: number;
    name: string;
    description: string;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface License {
    id: number;
    licenseType: LicenseType;
    paymentAmount: number;
    discountAmount: string;
    questionAllowed: number;
    projectPerLicense?: Nullable<number>;
    discountValidTill?: Nullable<DateTime>;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface IQuery {
    index(): string | Promise<string>;
    signin(loginUserInput: LoginUserInput): Auth | Promise<Auth>;
    signout(): string | Promise<string>;
    getdata(): string | Promise<string>;
    getAllQuestion(): QuestionBank[] | Promise<QuestionBank[]>;
    getAllQuestionById(id: number): QuestionBank | Promise<QuestionBank>;
    getPrinciple(): Principle[] | Promise<Principle[]>;
    getPrincipleById(id: number): Principle | Promise<Principle>;
    getAllUser(): User[] | Promise<User[]>;
    getUserById(id: number): User | Promise<User>;
    getAllCompany(): Company[] | Promise<Company[]>;
    getCompanyById(id: number): Company | Promise<Company>;
    getAllProject(): Project[] | Promise<Project[]>;
    getAllProjectById(id: number): Project | Promise<Project>;
    getAllLicense(): License[] | Promise<License[]>;
    getAllLicenseById(id: number): License | Promise<License>;
}

export interface IMutation {
    signup(signUpUserInput: SignUpUserInput): Auth | Promise<Auth>;
}

export type DateTime = any;
type Nullable<T> = T | null;
