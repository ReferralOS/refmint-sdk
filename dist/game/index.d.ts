import { Base } from "../base";
export declare class Game extends Base {
    isUser(custom_url: string, wallet_address: string): Promise<boolean>;
    userLinks(custom_url: string, wallet_address: string): Promise<{
        referral_link: string;
        referral_id: string;
    }>;
    click(project_url: string, campaign_url: string, link_id?: string): Promise<void>;
    leaderboard(project_url: string, campaign_url: string, order_by: string, //order by: referrals and score
    page_size: number, page: number, with_points_only: boolean): Promise<{
        wallet_address: string;
        score: number;
        referral: string;
    }[]>;
    userScore(project_url: string, campaign_url: string, wallet_address: string): Promise<{
        wallet_address: string;
        score: number;
        referral: string;
    }>;
    modifyScore(project_url: string, campaign_url: string, users: {
        wallet_address: string;
        score: number;
    }[]): Promise<void>;
    addUsers(project_url: string, campaign_url: string, users: {
        wallet_address: string;
        score: number;
        referral: number;
    }[], link_id?: string): Promise<{
        wallet_address: string;
        referral_link: string;
        referral_id: string;
    }[]>;
    referral(project_url: string, campaign_url: string, wallet_address: string, referral_only: boolean): Promise<void>;
}
