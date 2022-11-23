import React, {useState} from "react";
import styled from "@emotion/styled";
import Layout from "../layout";

import TableOfContents from "./toc";
import MemberSection from "./section";

import STUDENTS from '../data/students';
import Cofounders from '../data/Cofounder';
import ALUMNI from '../data/alumni';
import MENTORS from '../data/mentors';
import MemberCard from "./card";
import FounderSection from "./founder";

const HeaderSection = styled.section`
  display: flex;
  align-items: center;
  min-height: 25vmin;
  padding: 1rem 0.35rem;
`;

const TeamPage = () => {

    const [selection, setSelection] = useState('ALL');
    const [team, setTeam] = useState('ALL');
    const [keyword, setKeyword] = useState('');
    const [campus, setCampus] = useState('ALL')

    const filterMembers = (members, isAdvisor = false) => members.filter((m) =>
        (isAdvisor || team == 'ALL' || team == m.team) &&
        (isAdvisor || campus == 'ALL' || campus?.toLowerCase() == m?.campus?.toLowerCase()) &&
        (m?.firstname?.toLowerCase().startsWith(keyword) || m?.lastname?.toLowerCase().startsWith(keyword) || m?.username?.toLowerCase().startsWith(keyword))
    );

    return (
        <Layout title="Team Members | team bi0s - India's No.1 Ranked CTF Team & Cyber Security Research Club">
            <div className="px-3">
                <HeaderSection>
                    <h1 className="font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl">Our Team</h1>
                </HeaderSection>
            </div>
            <div className="flex flex-wrap mx-0">
                <div className="w-100 lg:w-1/4 xl:w-1/5 px-2">
                    <div className="sticky top-0" style={{ paddingTop: '7vh' }}>
                        <TableOfContents
                            campus={campus}
                            setCampus={setCampus}
                            setType={setSelection}
                            type={selection}
                            setTeam={setTeam}
                            team={team}
                            setKeyword={(k) => setKeyword(k.toLowerCase())}
                            keyword={keyword}
                        />
                    </div>
                </div>
                <div className="w-100 lg:w-3/4 xl:w-4/5 px-2">
                    <div style={{ height: '7.5vh' }} />
                    {(selection === 'ALL') && (
                        <FounderSection />
                    )}
                    {(selection === 'ALL' || selection === 'Cofounders') && (
                        <MemberSection
                            id="Cofounders"
                            title="Cofounders"
                            members={filterMembers(Cofounders, true)}
                        />
                    )}
                    {(selection === 'ALL' || selection === 'MENTORS') && (
                        <MemberSection
                            id="mentors"
                            title="Mentors"
                            members={filterMembers(MENTORS)}
                        />
                    )}
                    {(selection === 'ALL' || selection === 'STUDENTS') && (
                        <MemberSection
                            id="students"
                            title="Student Members"
                            members={filterMembers(STUDENTS)}
                            isStudent
                        />
                    )}
                    {(selection === 'ALL' || selection === 'ALUMNI') && (
                        <MemberSection
                            id="alumni"
                            title="Alumni"
                            members={filterMembers(ALUMNI)}
                            isAlumni
                        />
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default TeamPage;