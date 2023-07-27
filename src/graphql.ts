
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Role {
    SYSTEM = "SYSTEM",
    ADMIN = "ADMIN",
    USER = "USER"
}

export enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}

export enum LicenseType {
    FREE = "FREE",
    BUSINESS = "BUSINESS",
    PREMIUM = "PREMIUM",
    PLATINUM = "PLATINUM"
}

export enum QuestionType {
    MCQ = "MCQ",
    SLIDER = "SLIDER",
    TANDF = "TANDF",
    PERCENTAGE = "PERCENTAGE"
}

export enum Result {
    MET = "MET",
    NOTMET = "NOTMET",
    REVIEW = "REVIEW",
    ONGOING = "ONGOING"
}

export enum FeedbackType {
    General_Feedback = "General_Feedback",
    Suggestions = "Suggestions",
    Bug_Report = "Bug_Report",
    New_Question_Request = "New_Question_Request",
    New_Feature_Request = "New_Feature_Request"
}

export enum ExperienceRate {
    POOR = "POOR",
    SATISFACTORY = "SATISFACTORY",
    GOOD = "GOOD",
    VERY_GOOD = "VERY_GOOD",
    EXCELLENT = "EXCELLENT"
}

export interface LoginUserInput {
    email: string;
    password: string;
}

export interface SearchProjectInput {
    createdUserId?: Nullable<number>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    status?: Nullable<Status>;
    id?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
}

export interface SearchResultInput {
    userId?: Nullable<number>;
    projectId?: Nullable<number>;
    licenseId?: Nullable<number>;
    assesementId?: Nullable<number>;
    totalScore?: Nullable<number>;
    resultStatus?: Nullable<Result>;
    certified?: Nullable<Status>;
    certificatedId?: Nullable<string>;
    certificatePrivacy?: Nullable<Status>;
    status?: Nullable<Status>;
    id?: Nullable<number>;
}

export interface SearchTakeTestInput {
    userId?: Nullable<number>;
    projectId?: Nullable<number>;
    status?: Nullable<Status>;
}

export interface SearchLicenseslaveInput {
    licenseTypeId?: Nullable<number>;
    paymentStatus?: Nullable<Status>;
    licenseValidity?: Nullable<DateTime>;
    userId?: Nullable<number>;
    paymentReference?: Nullable<string>;
    paymentAmount?: Nullable<number>;
    status?: Nullable<Status>;
    id?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
}

export interface SignUpUserInput {
    email: string;
    password: string;
}

export interface ChangePasswordInput {
    id: number;
    oldpassword: string;
    newpassword: string;
    repassword: string;
}

export interface ContactUserInput {
    email: string;
    name: string;
    text: string;
}

export interface CreateQuestionbankInput {
    principleId: number;
    complianceId: number;
    questionType: QuestionType;
    question: string;
    description: string;
    questioncode: string;
    version: number;
    licensesId: number;
    answer: QuestionAnswerInput[];
    questionRefId?: Nullable<number>;
}

export interface QuestionAnswerInput {
    answer: string;
    mark: number;
    rec: string;
}

export interface UpdateQuestionbankInput {
    principleId?: Nullable<number>;
    complianceId?: Nullable<number>;
    questionType?: Nullable<QuestionType>;
    question?: Nullable<string>;
    description?: Nullable<string>;
    questioncode?: Nullable<string>;
    version?: Nullable<number>;
    licensesId?: Nullable<number>;
    answer?: Nullable<QuestionAnswer[]>;
    questionRefId?: Nullable<number>;
    id: number;
    status?: Nullable<Status>;
    deletedAt?: Nullable<DateTime>;
}

export interface QuestionAnswer {
    answer: string;
    mark: number;
    rec: string;
}

export interface CreatePrincipleInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface UpdatePrincipleInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
    status?: Nullable<Status>;
    id: number;
    deletedAt?: Nullable<DateTime>;
}

export interface UpdateUserInput {
    exampleField?: Nullable<number>;
    id: number;
    name?: Nullable<string>;
    email?: Nullable<string>;
    contact?: Nullable<string>;
    companyId?: Nullable<number>;
    address?: Nullable<string>;
    profession?: Nullable<string>;
    role?: Nullable<Role>;
    status?: Nullable<Status>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateCompanyInput {
    name?: Nullable<string>;
    website?: Nullable<string>;
    logo?: Nullable<string>;
    email?: Nullable<string>;
    ctoContact?: Nullable<string>;
    description?: Nullable<string>;
    address?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface UpdateCompanyInput {
    name?: Nullable<string>;
    website?: Nullable<string>;
    logo?: Nullable<string>;
    email?: Nullable<string>;
    ctoContact?: Nullable<string>;
    description?: Nullable<string>;
    address?: Nullable<string>;
    status?: Nullable<Status>;
    id: number;
    role?: Nullable<Role>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateProjectInput {
    createdUserId?: Nullable<number>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface UpdateProjectInput {
    createdUserId?: Nullable<number>;
    name?: Nullable<string>;
    description?: Nullable<string>;
    status?: Nullable<Status>;
    id: number;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateLicenseInput {
    licenseType: LicenseType;
    paymentAmount: number;
    name: string;
    discountAmount: number;
    questionAllowed: number;
    projectPerLicense: number;
    discountValidTill: DateTime;
    licenseValidTill: number;
    description: string;
}

export interface UpdateLicenseInput {
    licenseType?: Nullable<LicenseType>;
    paymentAmount?: Nullable<number>;
    name?: Nullable<string>;
    discountAmount?: Nullable<number>;
    questionAllowed?: Nullable<number>;
    projectPerLicense?: Nullable<number>;
    discountValidTill?: Nullable<DateTime>;
    licenseValidTill?: Nullable<number>;
    description?: Nullable<string>;
    id: number;
    status?: Nullable<Status>;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateAnswerInput {
    answers: SavedAnswer[];
}

export interface SavedAnswer {
    id?: Nullable<number>;
    principleid?: Nullable<number>;
    principlename?: Nullable<string>;
    question?: Nullable<string>;
    answer?: Nullable<string>;
    mark?: Nullable<number>;
    rec?: Nullable<string>;
    version?: Nullable<number>;
    license?: Nullable<number>;
    questiontype?: Nullable<QuestionType>;
    questioncode?: Nullable<string>;
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
    certificatedId?: Nullable<string>;
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
    certificatedId?: Nullable<string>;
    certificatePrivacy?: Nullable<Status>;
    status?: Nullable<Status>;
    id?: Nullable<number>;
    adminComments?: Nullable<string>;
}

export interface CreateComplianceInput {
    name: string;
    logo: string;
    description: string;
    LearnMoreLink: string;
    status?: Nullable<Status>;
}

export interface UpdateComplianceInput {
    name?: Nullable<string>;
    logo?: Nullable<string>;
    description?: Nullable<string>;
    LearnMoreLink?: Nullable<string>;
    status?: Nullable<Status>;
    id: number;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateLicenseslaveInput {
    licenseTypeId: number;
    paymentStatus: Status;
    licenseValidity: DateTime;
    userId: number;
    paymentReference: string;
    paymentAmount: number;
    status: Status;
}

export interface UpdateLicenseslaveInput {
    licenseTypeId?: Nullable<number>;
    paymentStatus?: Nullable<Status>;
    licenseValidity?: Nullable<DateTime>;
    userId?: Nullable<number>;
    paymentReference?: Nullable<string>;
    paymentAmount?: Nullable<number>;
    status?: Nullable<Status>;
    id: number;
    deletedAt?: Nullable<DateTime>;
}

export interface CreateFeedbackInput {
    userId?: Nullable<number>;
    feedbackType?: Nullable<FeedbackType>;
    comments?: Nullable<SavedFeedbackComment[]>;
    resultComment?: Nullable<string>;
    experienceRate?: Nullable<ExperienceRate>;
    toolComment?: Nullable<string>;
    generalComment?: Nullable<string>;
    email?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface SavedFeedbackComment {
    principleId: number;
    principle: string;
    comment: string;
    status: boolean;
    updatedAt: DateTime;
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

export interface Compliance {
    id: number;
    name: string;
    logo: string;
    description: string;
    LearnMoreLink: string;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface License {
    id: number;
    licenseType: LicenseType;
    paymentAmount: number;
    name: string;
    licenseValidTill?: Nullable<number>;
    description?: Nullable<string>;
    discountAmount: string;
    questionAllowed: number;
    projectPerLicense?: Nullable<number>;
    discountValidTill?: Nullable<DateTime>;
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
    licensesId: number;
    complianceId: number;
    status: Status;
    question: string;
    description?: Nullable<string>;
    questioncode: string;
    version: number;
    answer: QuestionAns[];
    questionRefId: number;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    principle: Principle;
    questionPlan: License;
    complince: Compliance;
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
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
}

export interface User {
    id: number;
    name?: Nullable<string>;
    email?: Nullable<string>;
    contact?: Nullable<string>;
    companyId?: Nullable<number>;
    address?: Nullable<string>;
    profession?: Nullable<string>;
    role: Role;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    company?: Nullable<Company>;
}

export interface Project {
    id: number;
    name: string;
    description: string;
    status: Status;
    createdUserId: number;
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

export interface Results {
    id: number;
    userId: number;
    projectId: number;
    licenseId: number;
    attemptNo: number;
    totalScore: number;
    resultStatus: Result;
    certified: Status;
    certificatedId: string;
    certificatePrivacy: Status;
    adminComments?: Nullable<string>;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    user: User;
    license: Licenseslave;
    project: Project;
    assesement: Answer;
}

export interface SavedAns {
    id: number;
    principleid: number;
    principlename: string;
    question: string;
    answer: string;
    mark: number;
    rec: string;
    version: number;
    license: number;
    questiontype: QuestionType;
    questioncode: string;
    status: boolean;
    updatedAt: DateTime;
}

export interface Answer {
    id: number;
    result?: Nullable<SavedAns[]>;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    assesment: Results;
}

export interface FeedbackComment {
    principleId: number;
    principle: string;
    comment: string;
    status: boolean;
    updatedAt: DateTime;
}

export interface Feedback {
    id: number;
    userId: number;
    feedbackType?: Nullable<FeedbackType>;
    resultComment?: Nullable<string>;
    comments?: Nullable<FeedbackComment[]>;
    experienceRate?: Nullable<ExperienceRate>;
    toolComment?: Nullable<string>;
    generalComment?: Nullable<string>;
    email?: Nullable<string>;
    status: Status;
    createdAt: DateTime;
    updatedAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    user: User;
}

export interface IQuery {
    index(): string | Promise<string>;
    signin(loginUserInput: LoginUserInput): Auth | Promise<Auth>;
    getAllQuestion(): QuestionBank[] | Promise<QuestionBank[]>;
    getQuestionById(id: number): QuestionBank | Promise<QuestionBank>;
    getQuestionHistory(id: number): QuestionBank[] | Promise<QuestionBank[]>;
    getPrinciple(): Principle[] | Promise<Principle[]>;
    getPrincipleById(id: number): Principle | Promise<Principle>;
    getAllUser(): User[] | Promise<User[]>;
    getUserById(id: number): User | Promise<User>;
    getAllCompany(): Company[] | Promise<Company[]>;
    getCompanyById(id: number): Company | Promise<Company>;
    getAllProject(): Project[] | Promise<Project[]>;
    getAllProjectById(id: number): Project | Promise<Project>;
    searchProject(searchProjectInput: SearchProjectInput): Project[] | Promise<Project[]>;
    getAllLicense(): License[] | Promise<License[]>;
    getAllLicenseById(id: number): License | Promise<License>;
    getAllAnswers(): Answer[] | Promise<Answer[]>;
    getAllResults(): Results[] | Promise<Results[]>;
    searchResult(searchResultInput: SearchResultInput): Results[] | Promise<Results[]>;
    getUserResult(searchResultInput: SearchResultInput): Results[] | Promise<Results[]>;
    taketest(searchTakeTestInput: SearchTakeTestInput): Results | Promise<Results>;
    getAllCompliances(): Compliance[] | Promise<Compliance[]>;
    getAllCompliancesById(id: number): Compliance | Promise<Compliance>;
    getAllLicenseslave(): Licenseslave[] | Promise<Licenseslave[]>;
    getAllLicenseslaveById(id: number): Licenseslave | Promise<Licenseslave>;
    searchLicenseslave(searchLicenseslaveInput: SearchLicenseslaveInput): Licenseslave[] | Promise<Licenseslave[]>;
    getUserLicenseSlave(id: number): Licenseslave | Promise<Licenseslave>;
    getAllFeedback(): Feedback[] | Promise<Feedback[]>;
    getAllFeedbackById(id: number): Feedback | Promise<Feedback>;
}

export interface IMutation {
    signup(signUpUserInput: SignUpUserInput): Auth | Promise<Auth>;
    changepassword(changePasswordInput: ChangePasswordInput): boolean | Promise<boolean>;
    forgetpassword(mail: string): boolean | Promise<boolean>;
    contactUs(contactUserInput: ContactUserInput): boolean | Promise<boolean>;
    resendmail(mail: string, name: string): boolean | Promise<boolean>;
    createQuestion(createQuestionbankInput: CreateQuestionbankInput): QuestionBank | Promise<QuestionBank>;
    updateQuestionById(updateQuestionbankInput: UpdateQuestionbankInput): QuestionBank | Promise<QuestionBank>;
    deleteQuestionById(updateQuestionbankInput: UpdateQuestionbankInput): QuestionBank | Promise<QuestionBank>;
    createPrinciple(createPrincipleInput: CreatePrincipleInput): Principle | Promise<Principle>;
    updatePrincipleById(updatePrincipleInput: UpdatePrincipleInput): Principle | Promise<Principle>;
    deletePrincipleById(updatePrincipleInput: UpdatePrincipleInput): Principle | Promise<Principle>;
    updateUserById(updateUserInput: UpdateUserInput): User | Promise<User>;
    deleteUserById(updateUserInput: UpdateUserInput): User | Promise<User>;
    verifyUser(mail: string): User | Promise<User>;
    createCompany(createCompanyInput: CreateCompanyInput): Company | Promise<Company>;
    updateCompanyById(updateCompanyInput: UpdateCompanyInput): Company | Promise<Company>;
    deleteCompanyById(updateCompanyInput: UpdateCompanyInput): Company | Promise<Company>;
    createProject(createProjectInput: CreateProjectInput): Project | Promise<Project>;
    updateProjectById(updateProjectInput: UpdateProjectInput): Project | Promise<Project>;
    deleteProjectById(updateProjectInput: UpdateProjectInput): Project | Promise<Project>;
    createLicense(createLicenseInput: CreateLicenseInput): License | Promise<License>;
    updateLicenseById(updateLicenseInput: UpdateLicenseInput): License | Promise<License>;
    deleteLicenseById(updateLicenseInput: UpdateLicenseInput): License | Promise<License>;
    createResults(createAnswerInput: CreateAnswerInput, createResultInput: CreateResultInput): Results | Promise<Results>;
    updateResults(updateAnswerInput: UpdateAnswerInput, updateResultInput: UpdateResultInput): Results | Promise<Results>;
    publicCertificate(updateResultInput: UpdateResultInput): Results | Promise<Results>;
    updateResultStatus(updateResultInput: UpdateResultInput): Results | Promise<Results>;
    createCompliance(createComplianceInput: CreateComplianceInput): Compliance | Promise<Compliance>;
    updateComplianceById(updateComplianceInput: UpdateComplianceInput): Compliance | Promise<Compliance>;
    deleteComplianceById(updateComplianceInput: UpdateComplianceInput): Compliance | Promise<Compliance>;
    createLicenseSlave(createLicenseslaveInput: CreateLicenseslaveInput): Licenseslave | Promise<Licenseslave>;
    updateLicenseslaveById(updateLicenseslaveInput: UpdateLicenseslaveInput): Licenseslave | Promise<Licenseslave>;
    deleteLicenseSlaveById(updateLicenseslaveInput: UpdateLicenseslaveInput): Licenseslave | Promise<Licenseslave>;
    createFeedback(createFeedbackInput: CreateFeedbackInput): Feedback | Promise<Feedback>;
}

export type DateTime = any;
type Nullable<T> = T | null;
