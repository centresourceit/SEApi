
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

export enum Result {
    MET = "MET",
    NOTMET = "NOTMET",
    REVIEW = "REVIEW"
}

export interface LoginUserInput {
    email: string;
    password: string;
}

export interface SignUpUserInput {
    email: string;
    password: string;
}

export interface UpdateQuestionbankInput {
    exampleField?: Nullable<number>;
    id: number;
    questionType?: Nullable<QuestionType>;
    questionPlan?: Nullable<LicenseType>;
    status?: Nullable<Status>;
    question?: Nullable<string>;
    description?: Nullable<string>;
    answer?: Nullable<QuestionAnswer[]>;
}

export interface QuestionAnswer {
    answer: string;
    mark: number;
    rec: string;
}

export interface UpdatePrincipleInput {
    exampleField?: Nullable<number>;
    id: number;
    name?: Nullable<string>;
    description?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface UpdateUserInput {
    exampleField?: Nullable<number>;
    id: number;
    name?: Nullable<string>;
    email?: Nullable<string>;
    contact?: Nullable<string>;
    address?: Nullable<string>;
    profession?: Nullable<string>;
    role?: Nullable<Role>;
    status?: Nullable<Status>;
}

export interface UpdateCompanyInput {
    exampleField?: Nullable<number>;
    id: number;
    name?: Nullable<string>;
    logo?: Nullable<string>;
    website?: Nullable<string>;
    email?: Nullable<string>;
    ctoContact?: Nullable<string>;
    description?: Nullable<string>;
    address?: Nullable<string>;
    role?: Nullable<Role>;
    status?: Nullable<Status>;
}

export interface UpdateProjectInput {
    exampleField?: Nullable<number>;
    id: number;
    name?: Nullable<string>;
    description?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface UpdateLicenseInput {
    exampleField?: Nullable<number>;
    id: number;
    licenseType?: Nullable<LicenseType>;
    paymentAmount?: Nullable<number>;
    discountAmount?: Nullable<string>;
    questionAllowed?: Nullable<number>;
    projectPerLicense?: Nullable<number>;
    discountValidTill?: Nullable<DateTime>;
    status?: Nullable<Status>;
}

export interface CreateAnswerInput {
    answers: SavedAnswer[];
}

export interface SavedAnswer {
    questionId?: Nullable<number>;
    question?: Nullable<string>;
    answer?: Nullable<string>;
    mark?: Nullable<number>;
    rec?: Nullable<string>;
    status?: Nullable<boolean>;
    updatedAt?: Nullable<DateTime>;
}

export interface CreateResultInput {
    userId?: Nullable<number>;
    projectId?: Nullable<number>;
    licenseId?: Nullable<number>;
    assesementId?: Nullable<number>;
    totalScore?: Nullable<number>;
    resultStatus?: Nullable<Result>;
    certified?: Nullable<Status>;
    certificatedId?: Nullable<number>;
    certificatePrivacy?: Nullable<Status>;
    status?: Nullable<Status>;
}

export interface UpdateAnswerInput {
    answers?: Nullable<SavedAnswer[]>;
}

export interface UpdateResultInput {
    userId?: Nullable<number>;
    projectId?: Nullable<number>;
    licenseId?: Nullable<number>;
    assesementId?: Nullable<number>;
    totalScore?: Nullable<number>;
    resultStatus?: Nullable<Result>;
    certified?: Nullable<Status>;
    certificatedId?: Nullable<number>;
    certificatePrivacy?: Nullable<Status>;
    status?: Nullable<Status>;
    id?: Nullable<number>;
}

export interface UpdateComplianceInput {
    exampleField?: Nullable<number>;
    id: number;
    name?: Nullable<string>;
    description?: Nullable<string>;
    LearnMoreLink?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface UpdateLicenseslaveInput {
    exampleField?: Nullable<number>;
    id: number;
    licenseTypeId?: Nullable<number>;
    userId?: Nullable<number>;
    paymentStatus?: Nullable<Status>;
    licenseValidity?: Nullable<DateTime>;
    paymentReference?: Nullable<string>;
    paymentAmount?: Nullable<number>;
    status?: Nullable<Status>;
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
    question_bank: QuestionBank[];
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
    description?: Nullable<string>;
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

export interface Results {
    id: number;
    userId: number;
    projectId: number;
    licenseId: number;
    attemptNo: number;
    totalScore: number;
    resultStatus: Result;
    certified: Status;
    certificatedId: number;
    certificatePrivacy: Status;
    adminComments?: Nullable<string>;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    user: User;
    license: License;
    project: Project;
}

export interface SavedAns {
    question: string;
    answer: string;
    mark: number;
    rec: string;
    status: boolean;
    updatedAt: DateTime;
}

export interface Answer {
    id: number;
    assesmentId: number;
    answer?: Nullable<SavedAns[]>;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    assesment: Results;
}

export interface Compliance {
    id: number;
    name: string;
    description: string;
    LearnMoreLink: string;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface Licenseslave {
    id: number;
    licenseTypeId: number;
    userId: number;
    paymentStatus: Status;
    licenseValidity: DateTime;
    paymentReference: string;
    paymentAmount: number;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    user: User;
    licenseType: License;
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
    getAllAnswers(): Answer[] | Promise<Answer[]>;
    getAllResults(): Results[] | Promise<Results[]>;
    getAllCompliances(): Compliance[] | Promise<Compliance[]>;
    getAllCompliancesById(id: number): Compliance | Promise<Compliance>;
    getAllLicenseslave(): Licenseslave[] | Promise<Licenseslave[]>;
    getAllLicenseslaveById(id: number): Licenseslave | Promise<Licenseslave>;
}

export interface IMutation {
    signup(signUpUserInput: SignUpUserInput): Auth | Promise<Auth>;
    updateQuestionById(updateQuestionbankInput: UpdateQuestionbankInput): QuestionBank | Promise<QuestionBank>;
    updatePrincipleById(updatePrincipleInput: UpdatePrincipleInput): Principle | Promise<Principle>;
    updateUserById(updateUserInput: UpdateUserInput): User | Promise<User>;
    updateCompanyById(updateCompanyInput: UpdateCompanyInput): Company | Promise<Company>;
    updateProjectById(updateProjectInput: UpdateProjectInput): Project | Promise<Project>;
    updateLicenseById(updateLicenseInput: UpdateLicenseInput): License | Promise<License>;
    createResults(createAnswerInput: CreateAnswerInput, createResultInput: CreateResultInput): Results | Promise<Results>;
    updateResults(updateAnswerInput: UpdateAnswerInput, updateResultInput: UpdateResultInput): Results | Promise<Results>;
    updateComplianceById(updateComplianceInput: UpdateComplianceInput): Compliance | Promise<Compliance>;
    updateLicenseslaveById(updateLicenseslaveInput: UpdateLicenseslaveInput): Licenseslave | Promise<Licenseslave>;
}

export type DateTime = any;
type Nullable<T> = T | null;
